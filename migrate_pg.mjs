import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.ts')) results.push(file);
        }
    });
    return results;
}

const files = walk('./server/api');

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Array destruct to Object destruct
    content = content.replace(/const\s+\[\s*([a-zA-Z0-9_]+)\s*\](?:\s*:\s*any)?\s*=\s*await\s+pool\.query/g, 'const { rows: $1 } = await pool.query');

    // 2. Dynamic push replacements
    content = content.replace(/updates\.push\(\s*['"`]([a-zA-Z0-9_]+)\s*=\s*\?['"`]\s*\)/g, 'updates.push(`$1 = \\$${values.length + 1}`)');
    content = content.replace(/updates\.push\(\s*`\$\{([a-zA-Z0-9_]+)\}\s*=\s*\?`\s*\)/g, 'updates.push(`\\${$1} = \\$${values.length + 1}`)');
    // For unit components where they use updates.push(`${field} = ?`)
    content = content.replace(/updates\.push\(\s*`\$\{([a-zA-Z0-9_]+)\}\s*=\s*\?`\s*\)/g, 'updates.push(`\\${$1} = \\$${values.length + 1}`)');
    // Catch generic `${field} = ?` 
    content = content.replace(/updates\.push\(\s*`\$\{([^}]+)\}\s*=\s*\?`\s*\)/g, 'updates.push(`\\${$1} = \\$${values.length + 1}`)');


    content = content.replace(/placeholders\.push\(\s*['"`]\?['"`]\s*\)/g, 'placeholders.push(`\\$${values.length + 1}`)');

    // 3. Manually parse each pool.query(...) to replace static '?'
    let out = '';
    let i = 0;
    while (i < content.length) {
        let idx = content.indexOf('pool.query(', i);
        if (idx === -1) {
            out += content.substring(i);
            break;
        }
        out += content.substring(i, idx + 11);
        i = idx + 11;

        let parenCount = 1;
        let startArgs = i;
        while (i < content.length && parenCount > 0) {
            if (content[i] === '(') parenCount++;
            else if (content[i] === ')') parenCount--;
            i++;
        }
        let args = content.substring(startArgs, i - 1);

        if (args.includes('updates.join') || args.includes('placeholders.join')) {
            args = args.replace(/WHERE\s+([a-zA-Z0-9_]+)\s*=\s*\?/g, 'WHERE $1 = \\$${values.length}');
            args = args.replace(/OR\s+([a-zA-Z0-9_]+)\s*=\s*\?/g, 'OR $1 = \\$${values.length + 1}');
        } else {
            let paramCounter = 1;
            args = args.replace(/\?/g, () => `$${paramCounter++}`);
        }
        out += args + ')';
    }
    content = out;

    fs.writeFileSync(file, content);
}

console.log('Migration AST parser complete');
