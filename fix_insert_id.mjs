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
    let original = content;

    // Replace insertId returns
    // e.g. return { id: (result as any).insertId, ... } -> return { id: result[0]?.id, ... }
    content = content.replace(/\(result as any\)\.insertId/g, 'result[0]?.id');
    content = content.replace(/result\.insertId/g, 'result[0]?.id'); // google.post.ts

    // Append RETURNING id to literal inserts that span multiple lines or single line
    // e.g. VALUES ($1, $2)' -> VALUES ($1, $2) RETURNING id'
    // e.g. VALUES ($1, $2)" -> VALUES ($1, $2) RETURNING id"
    // e.g. VALUES (${placeholders.join(', ')})` -> VALUES (${placeholders.join(', ')}) RETURNING id`
    // We can do a regex that replaces ")'" with ") RETURNING id'" if there's an INSERT before it.

    // Simpler regex: look for INSERT INTO ... VALUES(...) string endings
    // It's safer to just replace `\)` right before string exit quote if it's an insert string.

    if (content.includes('INSERT INTO')) {
        content = content.replace(/(VALUES\s*\([^)]+\))\s*(['"`])/g, '$1 RETURNING id$2');
    }

    if (original !== content) {
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
}
console.log('Done fixing insert IDs');
