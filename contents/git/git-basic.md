---
title: 猫でもわかるGitCommand
description: 猫でもGitHubのコマンドです
keyword:
  - Git
  - GitHub
contributors:
  - id: 60034520
    login: illionillion
    avatar_url: "https://avatars.githubusercontent.com/u/60034520?v=4"
    html_url: "https://github.com/illionillion"
  - id: 126809856
    login: hatimaruuuu
    avatar_url: "https://avatars.githubusercontent.com/u/126809856?v=4"
    html_url: "https://github.com/hatimaruuuu"
  - id: 109452865
    login: taku10101
    avatar_url: "https://avatars.githubusercontent.com/u/109452865?v=4"
    html_url: "https://github.com/taku10101"
latest_date: "2024-09-15"
slug: git/git-basic
---

## Gitの概要

Gitは、プロジェクトのソースコードを管理し、時間の経過とともにその変更履歴を追跡するためのシステムです。これにより、開発者は過去のバージョンに戻ったり、異なる機能を並行して開発したりすることができます。Gitを使うことで、複数の開発者が協力して作業しながらも、誰が何をいつ変更したのかを簡単に把握できるようになります。

## Gitの基本コマンド

以下に、よく使用されるGitコマンドとその使い方を紹介します。

### 1. `git init` ：ローカルリポジトリを新規作成

`git init`
コマンドは、既存のプロジェクトをGitで管理するために使用します。このコマンドを実行することで、プロジェクトのディレクトリ内に`.git`という隠しディレクトリが作成され、そこにリポジトリが作成されます。

```
git init
```

---

### 2. `git clone` :リモートリポジトリをローカルリポジトリにコピー

`git clone` は、リモートリポジトリの内容をローカルにコピーしてくるために使用します。このコマンドにより、リモートのリポジトリがローカルマシンにダウンロードされ、指定されたディレクトリにコピーされます。

```
git clone <リポジトリのURL>
```

---

### 3. `git pull` : リモートリポジトリの変更点をローカルリポジトリに取得

`git pull`は、リモートリポジトリの変更点をローカルに反映させるために使います。 `git fetch`と`git merge`を組み合わせた操作であり、リモートの変更を取得してローカルブランチにマージします。

```
git pull
```

---

### 4. `git push`：ローカルリポジトリの変更点をリモートリポジトリに反映

` git push` は、ローカルで行った変更をリモートリポジトリに送信するためのコマンドです。このコマンドにより、リモートリポジトリ上のブランチがローカルリポジトリと同期されます。

```
git push
```

---

### 5. `git add`：コミット対象のファイルをステージングエリアへ登録

`git add `は、ローカルで変更されたファイルを次のコミット対象に含めるためのコマンドです。これにより、変更内容が「ステージングエリア」に移動し、次のコミットに含められます。

```
git add <ファイル名>
```

---

### 6. `git commit` :追加・変更したファイルをリポジトリに保存

`git commit`は、ステージングエリアに登録されたファイルをリポジトリに保存するためのコマンドです。この操作を行うことで、ローカルリポジトリに変更が正式に反映され、履歴が更新されます。

```
git commit -m "コミットメッセージ"
```

---

### 7. `git log`：コミット履歴を表示

`git log`は、これ
までのコミット履歴を表示するためのコマンドです。これにより、どのような変更がいつ行われたのか、誰がそれを行ったのかを確認することができます。

```
git log
```

---

### 8.`git reset`:直前のコミットを取消

`git reset`は、直前のコミットを取り消してリポジトリを元の状態に戻すためのコマンドです。これにより、間違ってコミットしてしまった内容を取り消し、再度やり直すことができます。

```
git reset --hard <コミットID>
```

---

### 9.`git revert`:特定のコミットを取り消し

`git revert`は、指定した過去のコミットを打ち消すためのコマンドです。git resetとは異なり、リポジトリの履歴をそのままにして、その変更を打ち消す新たなコミットを作る。

```
git revert <コミットID>
```

---

### 10.`git tag`:コミットにタグを付ける

`git tag` は、特定のコミットに対してタグを付けるためのコマンドです。バージョン番号を管理するためや、特定のリリースポイントをマークするのに役立ちます。

```
git tag <タグ名>
```

---

### 11.`git status` :ローカルリポジトリの状態を確認

`git status`は、現在のリポジトリの状態を確認するためのコマンドです。これにより、どのファイルが変更されたのか、どのファイルがステージングエリアにあるのかを確認できます。

```
git status
```

---

### 12.`git diff`:ファイル内の差分箇所を表示

`git dilf`は、変更されたファイルの差分を確認するためのコマンドです。どの行がどのように変更されたのか、具体的な差分を表示します。

```
git diff
```

---

### 13. `gitmv`: ファイル内の差分箇所を表示

`git mv`は、ファイルを移動させたり、ファイル名を変更したりするためのコマンドです。これにより、Gitが変更を正しく追跡できるようになります。

```
git mv <旧ファイル名> <新ファイル名>
```

---

### 14. `git stash`:作業ツリーの状態を一時保存

`git stash`現在の作業内容を一時的に退避させ、クリーンな作業ツリーで他の操作を行いたいときに使うコマンドです。退避させた内容は後で復元することができます。

```
git stash
```

---

### 15. `git branch`:ブランチの作成/一覧表示/名前の変更/削除 等

`git branch`は、リポジトリのブランチを管理するためのコマンドです。ブランチの作成、一覧表示、名前の変更、削除など、さまざまな操作を行うことができます。

```
git branch
```

---

### 16. `git check out`:操作対象となるブランチの指定

`git check out`は、特定のブランチに切り替えるためのコマンドです。作業するブランチを指定する際に使用します。また、ブランチだけでなく、過去のコミットに切り替えることもできます。

```
git checkout <ブランチ名>
```

---

### 17. `git merge`:枝分かれさせたブランチを統合

`git merge`は、別のブランチで行われた変更を現在のブランチに統合するためのコマンドです。これにより、複数の開発者がそれぞれ作業した内容を一つのブランチにまとめることができます。

```
git merge <ブランチ名>
```

---

### 18. `git fetch`:リモートリポジトリの変更点をローカルリポジトリへ取得

`git fetch`は、リモートリポジトリの変更を取得しますが、ローカルリポジトリには自動的には反映されません。取得した変更は後から手動でマージすることができます。

```
git fetch
```

---

### 19.`git rebase`:分岐元ブランチに変更点をマージ

`git rebase`は、現在のブランチの変更点を、指定したブランチに適用させるためのコマンドです。git mergeとは異なり、履歴がきれいに保たれるため、プロジェクトによってはrebaseが推奨される場合もあります。

```
git rebase <ブランチ名>
```

---

### 20.`git gc`:不要なファイルを整理してローカルリポジトリを最適化

`git gc`は、リポジトリの不要なファイルを削除し、ディスクスペースを節約するために使用します。ガベージコレクション（gc）によって、リポジトリの最適化を行います。

```
git gc
```

---

# Gitを活用するためのヒント

Gitを効果的に使いこなすためには、以下のポイントを押さえると良いでしょう。

1. コミットメッセージを明確に
   コミットメッセージは、将来的に変更内容を把握するための重要な情報です。何を変更したのかが一目で分かるようなメッセージを心掛けましょう。

2. ブランチを活用する
   開発中に機能ごとにブランチを作成し、それをマージしていくワークフローは非常に効率的です。mainブランチやdevelopブランチを安定した状態に保ち、他のブランチで新しい機能や修正を行うと良いでしょう。

3. 頻繁にコミットする
   大きな変更を一度にコミットするのではなく、小さな単位でコミットすることで、どの変更が問題を引き起こしたかを特定しやすくなります。また、チームでの共同作業がス
   ムーズに進みます。

---

# 結論

Gitは、ソフトウェア開発やプロジェクト管理において欠かせないツールです。基本的なコマンドを理解し、適切に活用することで、チームでの作業が効率化され、開発の品質が向上します。この記事で紹介したコマンドは、Gitの操作をスムーズに進めるための基本となるものです。実際のプロジェクトでこれらを活用して、より効果的なバージョン管理を行ってください。
