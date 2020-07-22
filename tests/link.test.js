const m = require('mithril');
const mq = require("mithril-query");
const test = require("ospec");

test.spec('Linkbanner', () => {
    const BannerView = require('../dist/link.m.js').default;

    const text = 'Hol dir den geilsten Newsletter der Welt!';
    const urltext = 'Jetzt Phoenix Reisen NL abonnieren!';
    const url = 'https://www.phoenixreisen.com';

    test('#1 - should render correctly', () => {
        const Banner = mq(m(BannerView, {text, url, urltext}));
        test(Banner.should.contain(text)).equals(true);
        test(Banner.should.contain(urltext)).equals(true);
        test(Banner.should.have(`a[href="${url}"]`)).equals(true);
        test(Banner.should.have('.link-banner')).equals(true);
        test(Banner.should.have('.link-banner__textbox')).equals(true);
    });

    test('#2 - should fail without url & urltext', () => {
        let error = false;
        try {mq(m(BannerView))}
        catch(e) {error = true}
        test(error).equals(true);
    });

    test('#3 - should be renderable wihtout text attr', () => {
        let error = false;
        try {mq(m(BannerView, {url, urltext}))}
        catch(e) {error = true}
        test(error).equals(false);
    });
});