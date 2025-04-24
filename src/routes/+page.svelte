<script lang="ts">
  import Button from './../components/Button.svelte';
</script>

<svelte:head>
  <title>vanilla-extractとTailwind CSSの両立について</title>
</svelte:head>

<div class="max-w-screen-xl m-auto p-10">
  <h1 class="text-3xl font-bold mb-8">vanilla-extractとTailwind CSSの両立について</h1>

  <div class="mb-16">
    <div class="mb-8">
      <h2 class="text-xl font-bold">vanilla-extractの役割</h2>
      <p class="mb-2">コンポーネントのスタイル、テーマ管理などに利用します。</p>
    </div>

    <div class="mb-8">
      <h3 class="font-bold mb-2">1. コンポーネントの作成</h3>
      <Button label="Click Me" />
    </div>

    <div>
      <h3 class="font-bold mb-2">2. テーマ管理</h3>
      <p>vanilla-extract.config.tsとtheme.css.tsでのテーマ管理</p>
    </div>
  </div>

  <div class="mb-8">
    <h2 class="text-xl font-bold">Tailwind CSSの役割</h2>
    <p class="mb-2">レイアウト、マージン・パディングなど汎用的な見た目に利用します。</p>
  </div>

  <div class="mb-8">
    <h3 class="font-bold mb-2">1. レイアウト</h3>
    <div class="flex gap-4">
      <div class="w-20 h-20 bg-primary"></div>
      <div class="w-20 h-20 bg-primary"></div>
      <div class="w-20 h-20 bg-primary"></div>
      <div class="w-20 h-20 bg-primary"></div>
      <div class="w-20 h-20 bg-primary"></div>
    </div>
  </div>

  <div class="mb-8">
    <h3 class="font-bold mb-2">2. マージン・パディングの設定</h3>
    <div class="flex">
      <div class="w-20 h-20 bg-primary ml-2"></div>
      <div class="w-20 h-20 bg-primary ml-4"></div>
      <div class="w-20 h-20 bg-primary ml-6"></div>
      <div class="w-20 h-20 bg-primary ml-8"></div>
      <div class="w-20 h-20 bg-primary ml-10"></div>
    </div>
  </div>

  <div class="mb-16">
    <h3 class="font-bold mb-2">3. vanilla-extractのテーマのインポートが可能</h3>
    <p>tailwind.config.tsからvanilla-extract.config.tsの設定を読み込むことが可能です。<br>
      vanilla-extractと共通したテーマを持つことができます。</p>
  </div>

  <div>
    <h2 class="text-xl font-bold mb-2">まとめ</h2>
    <ul class="flex flex-col gap-8 mb-8">
      <li>
        <p class="font-bold">vanilla-extractのメリット</p>
        ・TypeScriptベースの型安全なスタイル定義<br>
        ・スタイルの分離と再利用性の高さ<br>
        ・CSS変数やテーマを型で管理できる<br>
        ・より複雑なスタイルロジックの表現が可能
      </li>
      <li>
        <p class="font-bold">Tailwind CSSのメリット</p>
        ・ユーティリティファーストで素早くスタイル適用<br>
        ・デザインシステムがすぐ使える（spacing, color, typographyなど）<br>
        ・クラス名で直感的にスタイルが読める
      </li>
    </ul>

    <h3 class="font-bold mb-2">一緒に使う設計の考え方</h3>
    <p>
      ・vanilla-extract → 「コンポーネントのスタイル」「テーマ管理」「状態に応じた切り替え」<br>
      ・Tailwind CSS → 「レイアウト」「マージン・パディング」「汎用的な見た目」
    </p>
  </div>
</div>
