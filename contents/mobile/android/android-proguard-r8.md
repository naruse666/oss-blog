---
title: "Android開発でのR8, Proguardの基本"
description: >-
  Androidアプリ開発でのR8とProguardの基本について解説します。コードの難読化と最適化の方法を学び、アプリのセキュリティとパフォーマンスを向上させましょう。
keyword:
  - Android
  - R8
  - Proguard
  - 難読化
  - 最適化
  - アプリ開発
contributors:
  - id: 60034520
    login: illionillion
    avatar_url: "https://avatars.githubusercontent.com/u/60034520?v=4"
    html_url: "https://github.com/illionillion"
  - id: 56211510
    login: SEKI-YUTA
    avatar_url: "https://avatars.githubusercontent.com/u/56211510?v=4"
    html_url: "https://github.com/SEKI-YUTA"
  - id: 109452865
    login: taku10101
    avatar_url: "https://avatars.githubusercontent.com/u/109452865?v=4"
    html_url: "https://github.com/taku10101"
latest_date: "2024-09-15"
slug: mobile/android/android-proguard-r8
---

# Android開発でのR8, Proguardの基本

Android開発では、アプリのセキュリティとパフォーマンスを向上させるために、コードの難読化と最適化が重要です。R8とProguardは、そのための主要なツールです。これらのツールを使うことで、アプリのコードを難読化し、リリースビルドのサイズを削減できます。本記事では、R8とProguardの基本について解説します。

## 1. R8とProguardとは

- **Proguard**: かつてAndroidビルドシステムのデフォルトの難読化ツールとして使用されていたツールです。コードの難読化、無駄なクラスの削減、メソッドのインライン化などを行います。
- **R8**: Proguardの後継として導入されたツールで、Androidアプリケーションのコードサイズを削減し、難読化を行います。R8は、Proguardのすべての機能に加え、D8デクスコンパイラと統合され、ビルド時間の短縮や最適化の改善が図られています。

## 2. R8とProguardのセットアップ

### R8の有効化

R8は、Android Gradleプラグイン3.4.0以降でデフォルトで有効になっています。特に設定を変更する必要はありませんが、`proguard-rules.pro`ファイルでカスタムルールを追加できます。

```gradle
buildTypes {
    release {
        minifyEnabled true
        proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
    }
}
```

### Proguardの設定

Proguardを使用する場合、`proguard-rules.pro`ファイルで難読化と最適化のルールを定義します。

```proguard
# プロガードのルール例
-keep public class * extends android.app.Activity
-keepclassmembers class * {
    public <init>(...);
}
```

## 3. R8とProguardの基本的な使用方法

### コードの難読化

R8とProguardは、コードの名前を難読化することで、逆コンパイルを難しくします。これにより、リバースエンジニアリングからアプリを保護できます。

### コードの最適化

これらのツールは、未使用のクラス、メソッド、フィールドを削除し、バイトコードを最適化してアプリのサイズを削減します。これにより、アプリのパフォーマンスが向上し、APKのサイズが小さくなります。

### カスタムルールの追加

アプリの特定の部分を難読化から除外するために、カスタムルールを追加できます。たとえば、リフレクションを使用する場合、そのクラスは難読化から除外する必要があります。

```proguard
-keep class com.example.MyClass { *; }
```

## 4. R8とProguardの注意点

- **アプリのテスト**: 難読化と最適化を行うと、予期しない動作が発生する可能性があります。必ずリリースビルドでアプリを徹底的にテストしてください。
- **ログの難読化**: ログ出力に使用される文字列も難読化されるため、デバッグ時に注意が必要です。重要なログは難読化から除外することを検討してください。
- **サードパーティライブラリ**: 使用しているサードパーティライブラリが難読化に対応しているか確認し、必要に応じてカスタムルールを追加してください。

## 5. R8とProguardのメリット

- **セキュリティの向上**: コードの難読化により、リバースエンジニアリングの難易度を上げ、アプリのセキュリティを強化します。
- **パフォーマンスの最適化**: 未使用のコードを削除し、バイトコードを最適化することで、アプリのパフォーマンスを向上させ、APKサイズを削減します。
- **ビルドプロセスへの統合**: R8はAndroidビルドシステムに統合されているため、特別な設定なしで難読化と最適化を行うことができます。

## まとめ

R8とProguardは、Android開発におけるコードの難読化と最適化のための重要なツールです。これらを適切に使用することで、アプリのセキュリティとパフォーマンスを向上させることができます。プロジェクトに応じたカスタムルールを設定し、アプリを最適化しましょう。
