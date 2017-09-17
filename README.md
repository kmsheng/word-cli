# word-cli

## Installation

```bash
npm i -g word-cli
```

## Usage

```
 Usage: word [options] [command]


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    add [sentence] [description]  Add a word data, wrap your answer in brackts if it's a sentence.
    list [options]                List words. For example, word list --page 2 --per-page 10
    study                         Start to study words.
    rm                            Remove word by id.
    find                          Find a word
```

## Caution
Be sure to backup ~NODE\_PATH/node\_modules/word-cli/src/model/db.sqlite3 before upgrading this module.
