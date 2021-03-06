# おさかなだぁびぃ

![スクショ](https://github.com/broadcast-derby/broadcast-derby.github.io/blob/main/docs/images/overview.png)

## おさかなだぁびぃとは

コメントで応援することで、おさかなさんたちのスピードが上がる競魚(競馬)ゲーム

リスナーはアプリをダウンロードせずに、コメントでのみ遊べます！

## 遊び方(リスナー向け)

※配信者もリスナーと同じようにコメントすることで一緒に遊べます

特にアカウントの作成等必要ありません

### 1. 魚券(馬券)を買う

![スクショ](https://github.com/broadcast-derby/broadcast-derby.github.io/blob/main/docs/images/ticket_vending_machine.png)

[こちらのリンク](https://broadcast-derby.github.io/)から魚券が購入できます

式別、魚、金額を入力して、発行ボタンを押すと魚券が発行されます

発行された魚券に記載されているコードをコピーして、出泳魚紹介画面が表示されているうちにコメントしよう！

#### 式別一覧

| 式別名 | 概要 |
|---|---|
|単勝|一着になる魚を当てる|   
|複勝|三着までに入る魚を当てる| 
|魚連|一着と二着の組み合わせを当てる| 
|魚単|一着と二着の着順を当てる| 
|ワイド|三着までに入る二尾の組み合わせを当てる| 
|三連複|三着までの魚の組み合わせを当てる| 
|三連単|三着までの魚の着順を当てる| 

### 2. 応援する

![スクショ](https://github.com/broadcast-derby/broadcast-derby.github.io/blob/main/docs/images/race.png)

レースが開始したらがんばってほしいおさかなさんを名指しで応援しよう！

> 例：「マグロがんばれ！」「鮭ファイト！！」

応援されたおさかなさんは一時的にスピードがあがるぞ！

### 3. 結果発表

全てのおさかなさんがゴールしたら結果発表！  
順位と魚券の組み合わせから払い戻し金が送られるぞ！  
目指せ億万長者！  

> 注意  
> ニコニコで遊ぶ場合はコテハンが必要になります

## 配信者向け操作方法

### 動作環境

Windows10以降  
※macでも多分動くと思うけど未確認  
また、以下の配信準備時の操作が異なる場合があります  

[ryu](https://twitter.com/kv510k)氏作成の `Multi Comment Viewer` が必要になります

### 配信準備

#### 1.Releasesから `release.zip` をダウンロード

![スクショ](https://github.com/broadcast-derby/broadcast-derby.github.io/blob/main/docs/images/release1.png)

![スクショ](https://github.com/broadcast-derby/broadcast-derby.github.io/blob/main/docs/images/release2.png)

> ※バージョン番号はスクショと異なる場合があります

#### 2. `releases.zip` を解凍して、`osakana_derby\html\setting` へ移動  

> ※解凍先のフォルダに日本語が入ってるとうまく動かない場合があります

#### 3.コメントを取得できるように設定

検索枠で `cmd` と入力  
コマンドプロンプトを右クリック→ `管理者として実行`

![スクショ](https://github.com/broadcast-derby/broadcast-derby.github.io/blob/main/docs/images/release3.png)

`cd` コマンドを使用して `osakana_derby\html\setting` へ移動  

![スクショ](https://github.com/broadcast-derby/broadcast-derby.github.io/blob/main/docs/images/release4.png)

> ※スクショはDドライブに `osakana_derby` フォルダがある場合のコマンド例です  
> ※Cドライブに `osakana_derby` フォルダを解凍した場合 `/D` は入力する必要ありません  
> 例： C:\>cd C:\osakana_derby\html\setting

`Multi Comment Viewer` のコメジェネ連携先にある `comment.xml` を `osakana_derby\html\setting\comment.xml` にシンボリックリンクとして設定する  

```
テンプレート： > mklink comment.xml <リンク元>  
```

```
例： D:\osakana_derby\html\setting> mklink comment.xml C:\CommentGenerator\Multi\CommentGenerator0.0.8a\comment.xml
```

![スクショ](https://github.com/broadcast-derby/broadcast-derby.github.io/blob/main/docs/images/release5.png)

> ※ `comment.xml <<===>> [Multi Comment Viewerのリンク先] のシンボリック リンクが作成されました` が表示されていればOKです

![スクショ](https://github.com/broadcast-derby/broadcast-derby.github.io/blob/main/docs/images/release6.png)

> ※settingフォルダを開くとcomment.xmlのショートカットが表示されていれば成功です  
> （右クリックからショートカットの作成だとうまくいかないことがあるので注意）

#### アプリを起動する

`osakana_derby` フォルダでコマンドプロンプトを開く

![スクショ](https://github.com/broadcast-derby/broadcast-derby.github.io/blob/main/docs/images/release7.png)

> ※スクショの欄で `cmd` と入力するとコマンドプロンプトが立ち上がります

`start nginx` と入力してエンター  
`http://localhost/game` をブラウザで開くとゲーム画面が表示されます  
待機中画面であれば、コメントが表示されるので、そこで確認できます  

![スクショ](https://github.com/broadcast-derby/broadcast-derby.github.io/blob/main/docs/images/release7.png)

#### おさかなを設定する

1. `http://localhost/config` をブラウザで開くと設定画面が表示されます
1. 出泳魚を好きなだけ追加してください  

> ※ゲーム画面をOBSのブラウザソースで表示する場合には、configもOBSのブラウザソースで開き、対話ボタンから操作してください

#### 配信者のおさかなだぁびぃの運営の仕方

1. 待機画面に過去参加してくれたリスナーの所持金が表示されます
1. `2.出泳魚紹介` ボタンを押すと、config画面で設定したおさかなが表示されます  
リスナーに魚券を買うように促してください
1. `3.魚券購入締め切り` ボタンを押すと、魚券購入用のコメントが適用されなくなります  
また、どのおさかなが人気かが表示されます
1. `4.レース` ボタンを押すとレース画面に切り替わります  
スタートボタンを押すとレースが開始されます  
リスナーに応援コメントを促してレースを楽しんでください
1. 全てのおさかながゴールすると `5.結果表示` ボタンが押せるようになります  
`レース結果` では今行われたレースの結果を表示し  
`払戻金` では、そのレースで購入された魚券の払い戻し状況を表示します
1. `1.待機中` ボタンを押すことで2レース目を行うことができます

# 開発者向け

開発はWSL+docker+makeで行います

ローカルでの起動は以下で行います

```
> make init
> make exec
# npm install
# npm run dev
```

`make init` は初回のみ  
次回以降は `make start` を使用してください

`docker-compose.yml` のvolume先を各々変更してください
