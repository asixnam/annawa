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

    // Fix: updates.push(`\${field} = \${values.length + 1}`) -> updates.push(`${field} = $${values.length + 1}`)
    content = content.replace(/updates\.push\(`\\\$\{([a-zA-Z0-9_]+)\}\s*=\s*\\\$\{values\.length \+ 1\}`\)/g, 'updates.push(`${$1} = $$${values.length + 1}`)');

    // Also fix generic keys: updates.push(`\${dbCol} = ...
    // Regex matches the literal text "\${field} = \${values.length + 1}"
    content = content.replace(/updates\.push\(`\\\$\{([^}]+)\}\s*=\s*\\\$\{values\.length \+ 1\}`\)/g, 'updates.push(`${$1} = $$${values.length + 1}`)');

    // Fix: placeholders.push(`\${values.length + 1}`) => placeholders.push(`$${values.length + 1}`)
    content = content.replace(/placeholders\.push\(`\\\$\{values\.length \+ 1\}`\)/g, 'placeholders.push(`$$${values.length + 1}`)');

    // Fix the WHERE id = \${values.length} AND unit_id = ?
    content = content.replace(/WHERE id = \\\$\{values\.length\} AND unit_id = \?/g, 'WHERE id = $$${values.length - 1} AND unit_id = $$${values.length}');

    fs.writeFileSync(file, content);
}
console.log('Done fixing template literals');
