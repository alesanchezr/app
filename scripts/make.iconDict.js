/* eslint-disable no-console */

// Function creates an array of icon filename in a .json file (for storybook)
const fs = require('fs');
const { walk, success } = require('./_utils');

const fileName = 'iconDict';

walk(`${__dirname}/../src/common/components/Icon/set`)
  .then((files) => {
    const slugs = [];
    for (let i = 0; i < files.length; i += 1) {
      const path = files[i];
      const slug = path
        .split('.')[0]
        .substr(path.lastIndexOf(`${process.platform === 'win32' ? '\\' : '/'}`) + 1);
      slugs.push(slug);
    }
    console.log('Stored icons:', slugs);
    fs.writeFile(
      `${__dirname}/../src/common/utils/${fileName}.json`,
      JSON.stringify(slugs),
      (err) => {
        if (err) return console.log(err);
        return success(`\n${fileName} => /src/common/utils/${fileName}.json\n`);
      },
    );
  })
  .catch((e) => console.error(e));
