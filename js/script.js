data = [
    {
        name: 'アッシュ',
        image: 'assyu.png'
    },
    {
        name: 'オクタン',
        image: 'okutan.png'
    },
    {
        name: 'カタリスト',
        image: 'katarisuto.png'
    },
    {
        name: 'クリプト',
        image: 'kuriputo.png'
    },
    {
        name: 'コンジット',
        image: 'konjitto.png'
    },
    {
        name: 'コースティック',
        image: 'kosuthikku.png'
    },
    {
        name: 'シア',
        image: 'sia.png'
    },
    {
        name: 'ジブラルタル',
        image: 'jiburarutaru.png'
    },
    {
        name: 'ニューキャッスル',
        image: 'nyukyassuru.png'
    },
    {
        name: 'バリスティック',
        image: 'barisuthikku.png'
    },
    {
        name: 'バンガロール',
        image: 'bangaroru.png'
    },
    {
        name: 'パスファインダー',
        image: 'pasufainda.png'
    },
    {
        name: 'ヒューズ',
        image: 'hyuzu.png'
    },
    {
        name: 'ブラッドハウンド',
        image: 'buraddohaundo.png'
    },
    {
        name: 'ホライゾン',
        image: 'horaizon.png'
    },
    {
        name: 'マッドマギー',
        image: 'maddomagi.png'
    },
    {
        name: 'ミラージュ',
        image: 'miraju.png'
    },
    {
        name: 'ライフライン',
        image: 'raihurain.png'
    },
    {
        name: 'ランパート',
        image: 'ranpato.png'
    },
    {
        name: 'レイス',
        image: 'reisu.png'
    },
    {
        name: 'レヴナント',
        image: 'revunant.png'
    },
    {
        name: 'ローバ',
        image: 'roba.png'
    },
    {
        name: 'ワットソン',
        image: 'wattoson.png'
    },
    {
        name: 'ヴァルキリー',
        image: 'varukiri.png'
    },
];

$(".btn").on("click", function () {
    $("#result").empty();
    n = Math.floor(Math.random() * data.length);
    $("#result").append("<h1>"+data[n].name+"</h1><p><img src='/images/"+ data[n].image +"'></p>");
});
document.write('<a href="' + data[n].link + '">');
document.write('<img src="' + data[n].image + '">');
document.write('<p>' + data[n].text + '</p>');
document.write('</a>');