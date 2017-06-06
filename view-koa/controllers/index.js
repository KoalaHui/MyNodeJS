/**
 * Created by KoalaHui on 2017/6/6 0006.
 */
// index:

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html', {
            title: 'Welcome'
        });
    }
};