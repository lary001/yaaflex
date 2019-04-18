let LangGlobal = {};
const express = require('express');
const router = express.Router();
const RoutesConfig = require('./../config/routes.config');
LangGlobal.ES = require('./../config/lang/ES')
LangGlobal.EN = require('./../config/lang/EN')
const CheckSession = require('./../auth/checkSession')
const env = require('./../config/environment.config')
const cFunctions = require('./../helpers/common.functions')
const assets = require('./../config/assets_site.config');

//var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;




router.get('/', CheckSession, async (req, res) => {
    res.render("front/home",
        {
            data: {},
            config: {
                theme: env.site_theme.toLowerCase(),
                lang: cFunctions.getUserLang(req),
                langTexts: LangGlobal[cFunctions.getUserLang(req)],
                path: RoutesConfig,
                assets: assets
            },
            seo: {
                title: 'YAAFLEX - Yet another amazing framework by leganux',
                description: 'YAAFLEX - yet another amazing framework by leganux',
                image: 'http://cdn.leganux.com/IMG/integrado.png',
                domain: req.get('host'),
                url: req.protocol + '://' + req.get('host') + req.originalUrl,
                tw_posted_by: '@leganux',
                og_type: 'article',
            }
        });
});

router.get('/themePreview', CheckSession, async (req, res) => {
    res.render("front/themePreview",
        {
            data: {},
            config: {
                theme: 'Cosmo',
                lang: cFunctions.getUserLang(req),
                langTexts: LangGlobal[cFunctions.getUserLang(req)],
                path: RoutesConfig,
                assets: assets
            },
            seo: {
                title: 'YAAFLEX - Yet another amazing framework by leganux',
                description: 'YAAFLEX - yet another amazing framework by leganux',
                image: 'http://cdn.leganux.com/IMG/integrado.png',
                domain: req.get('host'),
                url: req.protocol + '://' + req.get('host') + req.originalUrl,
                tw_posted_by: '@leganux',
                og_type: 'article',
            }
        });
});



module.exports = router;

















