
        function _base64ToArrayBuffer(base64) {
            var binary_string = window.atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        }

        function _arrayBufferToBase64( buffer ) {
          var binary = '';
          var bytes = new Uint8Array( buffer );
          var len = bytes.byteLength;
          for (var i = 0; i < len; i++) {
             binary += String.fromCharCode( bytes[ i ] );
          }
          return window.btoa( binary );
        }

        document.addEventListener("DOMContentLoaded", function() {
            var old_prefilter = jQuery.htmlPrefilter;

            jQuery.htmlPrefilter = function(v) {
            
                var regs = [
                    /<a[^>]*href="(?<url>[^"]*)"[^>]*>/gi,
                    /<img[^>]*src="(?<url>[^"]*)"\/?>/gi,
                    /<source[^>]*src="(?<url>[^"]*)"/gi
                ];
                
                var replaces = {};

                for (i in regs)
                {
                    reg = regs[i];

                    var m = true;
                    var n = 0;
                    while (m && n < 100)
                    {
                        n += 1;
                        
                        m = reg.exec(v);
                        if (m)
                        {
                            if (m['groups'] && m['groups']['url'])
                            {
                                var url = m['groups']['url'];
                                if (server_data.hasOwnProperty(url))
                                {
                                    console.log(`Added url:${url} to be replaced with data of ${server_data[url].length} bytes length`);
                                    replaces[url] = server_data[url];                                    
                                }
                            }
                        }
                    }
                }
                
                for (let src in replaces)
                {
                    let dest = replaces[src];
                    v = v.replace(src, dest);
                }

                return old_prefilter(v);
            };
        });

        var server_data={
 "plugin/behaviors/index.js": "'use strict';\n\nallure.api.addTranslation('en', {\n    tab: {\n        behaviors: {\n            name: 'Behaviors'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Features by stories',\n            showAll: 'show all'\n        }\n    }\n});\n\nallure.api.addTranslation('ru', {\n    tab: {\n        behaviors: {\n            name: 'Функциональность'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Функциональность',\n            showAll: 'показать все'\n        }\n    }\n});\n\nallure.api.addTranslation('zh', {\n    tab: {\n        behaviors: {\n            name: '功能'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: '特性场景',\n            showAll: '显示所有'\n        }\n    }\n});\n\nallure.api.addTranslation('de', {\n    tab: {\n        behaviors: {\n            name: 'Verhalten'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Features nach Stories',\n            showAll: 'Zeige alle'\n        }\n    }\n});\n\nallure.api.addTranslation('nl', {\n    tab: {\n        behaviors: {\n            name: 'Functionaliteit'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Features en story’s',\n            showAll: 'Toon alle'\n        }\n    }\n});\n\nallure.api.addTranslation('he', {\n    tab: {\n        behaviors: {\n            name: 'התנהגויות'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'תכונות לפי סיפורי משתמש',\n            showAll: 'הצג הכול'\n        }\n    }\n});\n\nallure.api.addTranslation('hu', {\n    tab: {\n        behaviors: {\n            name: 'Viselkedés'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funkció rendezése sztorinként',\n            showAll: 'összes mutatása'\n        }\n    }\n});\n\nallure.api.addTranslation('br', {\n    tab: {\n        behaviors: {\n            name: 'Comportamentos'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funcionalidades por história',\n            showAll: 'Mostrar tudo'\n        }\n    }\n});\n\nallure.api.addTranslation('ja', {\n    tab: {\n        behaviors: {\n            name: '振る舞い'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'ストーリー別の機能',\n            showAll: '全て表示'\n        }\n    }\n});\n\nallure.api.addTranslation('es', {\n    tab: {\n        behaviors: {\n            name: 'Funcionalidades'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funcionalidades por Historias de Usuario',\n            showAll: 'mostrar todo'\n        }\n    }\n});\n\nallure.api.addTranslation('kr', {\n    tab: {\n        behaviors: {\n            name: '동작'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: '스토리별 기능',\n            showAll: '전체 보기'\n        }\n    }\n});\n\nallure.api.addTranslation('fr', {\n    tab: {\n        behaviors: {\n            name: 'Comportements'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Thèmes par histoires',\n            showAll: 'Montrer tout'\n        }\n    }\n});\n\nallure.api.addTranslation('pl', {\n    tab: {\n        behaviors: {\n            name: 'Zachowania'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funkcje według historii',\n            showAll: 'pokaż wszystko'\n        }\n    }\n});\n\nallure.api.addTranslation('am', {\n    tab: {\n        behaviors: {\n            name: 'Վարքագծեր'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Ֆիչրները ըստ պատմությունների',\n            showAll: 'ցույց տալ բոլորը'\n        }\n    }\n});\n\nallure.api.addTranslation('az', {\n    tab: {\n        behaviors: {\n            name: 'Davranışlar'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Hekayələr üzrə xüsusiyyətlər',\n            showAll: 'hamısını göstər'\n        }\n    }\n});\n\nallure.api.addTranslation('sv', {\n    tab: {\n        behaviors: {\n            name: 'Beteenden'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funktioner efter user stories',\n            showAll: 'visa allt'\n        }\n    }\n});\n\nallure.api.addTranslation('isv', {\n    tab: {\n        behaviors: {\n            name: 'Funkcionalnost',\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funkcionalnost',\n            showAll: 'pokaži vsěčto',\n        }\n    }\n});\n\nallure.api.addTranslation('ka', {\n    tab: {\n        behaviors: {\n            name: 'ფუნქციონალი',\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'ფუნქციონალი',\n            showAll: 'ყველას ჩვენება',\n        }\n    }\n});\n\nallure.api.addTranslation('it', {\n    tab: {\n        behaviors: {\n            name: 'Comportamenti'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funzionalità per storie',\n            showAll: 'Mostra tutto'\n        }\n    }\n});\n\nallure.api.addTab('behaviors', {\n    title: 'tab.behaviors.name', icon: 'fa fa-list',\n    route: 'behaviors(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',\n    onEnter: (function (testGroup, testResult, testResultTab) {\n        return new allure.components.TreeLayout({\n            testGroup: testGroup,\n            testResult: testResult,\n            testResultTab: testResultTab,\n            tabName: 'tab.behaviors.name',\n            baseUrl: 'behaviors',\n            url: 'data/behaviors.json',\n            csvUrl: 'data/behaviors.csv'\n        });\n    })\n});\n\nallure.api.addWidget('widgets', 'behaviors', allure.components.WidgetStatusView.extend({\n    rowTag: 'a',\n    title: 'widget.behaviors.name',\n    baseUrl: 'behaviors',\n    showLinks: true\n}));\n", 
 "plugin/packages/index.js": "'use strict';\n\nallure.api.addTranslation('en', {\n    tab: {\n        packages: {\n            name: 'Packages'\n        }\n    }\n});\n\nallure.api.addTranslation('ru', {\n    tab: {\n        packages: {\n            name: 'Пакеты'\n        }\n    }\n});\n\nallure.api.addTranslation('zh', {\n    tab: {\n        packages: {\n            name: '包'\n        }\n    }\n});\n\nallure.api.addTranslation('de', {\n    tab: {\n        packages: {\n            name: 'Pakete'\n        }\n    }\n});\n\nallure.api.addTranslation('nl', {\n    tab: {\n        packages: {\n            name: 'Packages'\n        }\n    }\n});\n\nallure.api.addTranslation('he', {\n    tab: {\n        packages: {\n            name: 'חבילות'\n        }\n    }\n});\n\nallure.api.addTranslation('hu', {\n    tab: {\n        packages: {\n            name: 'Modulok'\n        }\n    }\n});\n\nallure.api.addTranslation('br', {\n    tab: {\n        packages: {\n            name: 'Pacotes'\n        }\n    }\n});\n\nallure.api.addTranslation('ja', {\n    tab: {\n        packages: {\n            name: 'パッケージ'\n        }\n    }\n});\n\nallure.api.addTranslation('es', {\n    tab: {\n        packages: {\n            name: 'Paquetes'\n        }\n    }\n});\n\nallure.api.addTranslation('kr', {\n    tab: {\n        packages: {\n            name: '패키지'\n        }\n    }\n});\n\nallure.api.addTranslation('fr', {\n    tab: {\n        packages: {\n            name: 'Paquets'\n        }\n    }\n});\n\nallure.api.addTranslation('pl', {\n    tab: {\n        packages: {\n            name: 'Pakiety'\n        }\n    }\n});\n\nallure.api.addTranslation('am', {\n    tab: {\n        packages: {\n            name: 'Փաթեթներ'\n        }\n    }\n});\n\nallure.api.addTranslation('az', {\n    tab: {\n        packages: {\n            name: 'Paketlər'\n        }\n    }\n});\n\nallure.api.addTranslation('sv', {\n    tab: {\n        packages: {\n            name: 'Paket'\n        }\n    }\n});\n\nallure.api.addTranslation('isv', {\n    tab: {\n        packages: {\n            name: 'Pakety'\n        }\n    }\n});\n\nallure.api.addTranslation('ka', {\n    tab: {\n        packages: {\n            name: 'პაკეტები'\n        }\n    }\n});\n\nallure.api.addTranslation('it', {\n    tab: {\n        packages: {\n            name: 'Pacchetti'\n        }\n    }\n});\n\nallure.api.addTab('packages', {\n    title: 'tab.packages.name', icon: 'fa fa-align-left',\n    route: 'packages(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',\n    onEnter: (function (testGroup, testResult, testResultTab) {\n        return new allure.components.TreeLayout({\n            testGroup: testGroup,\n            testResult: testResult,\n            testResultTab: testResultTab,\n            tabName: 'tab.packages.name',\n            baseUrl: 'packages',\n            url: 'data/packages.json'\n        });\n    })\n});\n", 
 "plugin/screen-diff/styles.css": ".screen-diff__switchers {\n  margin-bottom: 1em;\n}\n\n.screen-diff__switchers label + label {\n  margin-left: 1em;\n}\n\n.screen-diff__overlay {\n  position: relative;\n  cursor: col-resize;\n}\n\n.screen-diff__container {\n  overflow-x: auto;\n}\n\n.screen-diff__image-over {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background: #fff;\n  position: absolute;\n  overflow: hidden;\n  box-shadow: 2px 0 1px -1px #aaa;\n}\n\n.screen-diff-error {\n  color: #fd5a3e;\n}\n", 
 "plugin/screen-diff/index.js": "(function () {\n    var settings = allure.getPluginSettings('screen-diff', { diffType: 'diff' });\n\n    function renderImage(src) {\n        return (\n            '&lt;div class=\"screen-diff__container\"&gt;' +\n            '&lt;img class=\"screen-diff__image\" src=\"' +\n            src +\n            '\"&gt;' +\n            '&lt;/div&gt;'\n        );\n    }\n\n    function findImage(data, name) {\n        if (data.testStage && data.testStage.attachments) {\n            var matchedImage = data.testStage.attachments.filter(function (attachment) {\n                return attachment.name === name;\n            })[0];\n            if (matchedImage) {\n                return 'data/attachments/' + matchedImage.source;\n            }\n        }\n        return null;\n    }\n\n    function renderDiffContent(type, diffImage, actualImage, expectedImage) {\n        if (type === 'diff') {\n            if (diffImage) {\n                return renderImage(diffImage);\n            }\n        }\n        if (type === 'overlay' && expectedImage) {\n            return (\n                '&lt;div class=\"screen-diff__overlay screen-diff__container\"&gt;' +\n                '&lt;img class=\"screen-diff__image\" src=\"' +\n                expectedImage +\n                '\"&gt;' +\n                '&lt;div class=\"screen-diff__image-over\"&gt;' +\n                '&lt;img class=\"screen-diff__image\" src=\"' +\n                actualImage +\n                '\"&gt;' +\n                '&lt;/div&gt;' +\n                '&lt;/div&gt;'\n            );\n        }\n        if (actualImage) {\n            return renderImage(actualImage);\n        }\n        return 'No diff data provided';\n    }\n\n    var TestResultView = Backbone.Marionette.View.extend({\n        regions: {\n            subView: '.screen-diff-view',\n        },\n        template: function () {\n            return '&lt;div class=\"screen-diff-view\"&gt;&lt;/div&gt;';\n        },\n        onRender: function () {\n            var data = this.model.toJSON();\n            var testType = data.labels.filter(function (label) {\n                return label.name === 'testType';\n            })[0];\n            var diffImage = findImage(data, 'diff');\n            var actualImage = findImage(data, 'actual');\n            var expectedImage = findImage(data, 'expected');\n            if (!testType || testType.value !== 'screenshotDiff') {\n                return;\n            }\n            this.showChildView(\n                'subView',\n                new ScreenDiffView({\n                    diffImage: diffImage,\n                    actualImage: actualImage,\n                    expectedImage: expectedImage,\n                }),\n            );\n        },\n    });\n    var ErrorView = Backbone.Marionette.View.extend({\n        templateContext: function () {\n            return this.options;\n        },\n        template: function (data) {\n            return '&lt;pre class=\"screen-diff-error\"&gt;' + data.error + '&lt;/pre&gt;';\n        },\n    });\n    var AttachmentView = Backbone.Marionette.View.extend({\n        regions: {\n            subView: '.screen-diff-view',\n        },\n        template: function () {\n            return '&lt;div class=\"screen-diff-view\"&gt;&lt;/div&gt;';\n        },\n        onRender: function () {\n            jQuery\n                .getJSON(this.options.sourceUrl)\n                .then(this.renderScreenDiffView.bind(this), this.renderErrorView.bind(this));\n        },\n        renderErrorView: function (error) {\n            console.log(error);\n            this.showChildView(\n                'subView',\n                new ErrorView({\n                    error: error.statusText,\n                }),\n            );\n        },\n        renderScreenDiffView: function (data) {\n            this.showChildView(\n                'subView',\n                new ScreenDiffView({\n                    diffImage: data.diff,\n                    actualImage: data.actual,\n                    expectedImage: data.expected,\n                }),\n            );\n        },\n    });\n\n    var ScreenDiffView = Backbone.Marionette.View.extend({\n        className: 'pane__section',\n        events: function () {\n            return {\n                ['click [name=\"screen-diff-type-' + this.cid + '\"]']: 'onDiffTypeChange',\n                'mousemove .screen-diff__overlay': 'onOverlayMove',\n            };\n        },\n        initialize: function (options) {\n            this.diffImage = options.diffImage;\n            this.actualImage = options.actualImage;\n            this.expectedImage = options.expectedImage;\n            this.radioName = 'screen-diff-type-' + this.cid;\n        },\n        templateContext: function () {\n            return {\n                diffType: settings.get('diffType'),\n                diffImage: this.diffImage,\n                actualImage: this.actualImage,\n                expectedImage: this.expectedImage,\n                radioName: this.radioName,\n            };\n        },\n        template: function (data) {\n            if (!data.diffImage && !data.actualImage && !data.expectedImage) {\n                return '';\n            }\n\n            return (\n                '&lt;h3 class=\"pane__section-title\"&gt;Screen Diff&lt;/h3&gt;' +\n                '&lt;div class=\"screen-diff__content\"&gt;' +\n                '&lt;div class=\"screen-diff__switchers\"&gt;' +\n                '&lt;label&gt;&lt;input type=\"radio\" name=\"' +\n                data.radioName +\n                '\" value=\"diff\"&gt; Show diff&lt;/label&gt;' +\n                '&lt;label&gt;&lt;input type=\"radio\" name=\"' +\n                data.radioName +\n                '\" value=\"overlay\"&gt; Show overlay&lt;/label&gt;' +\n                '&lt;/div&gt;' +\n                renderDiffContent(\n                    data.diffType,\n                    data.diffImage,\n                    data.actualImage,\n                    data.expectedImage,\n                ) +\n                '&lt;/div&gt;'\n            );\n        },\n        adjustImageSize: function (event) {\n            var overImage = this.$(event.target);\n            overImage.width(overImage.width());\n        },\n        onRender: function () {\n            const diffType = settings.get('diffType');\n            this.$('[name=\"' + this.radioName + '\"][value=\"' + diffType + '\"]').prop(\n                'checked',\n                true,\n            );\n            if (diffType === 'overlay') {\n                this.$('.screen-diff__image-over img').on('load', this.adjustImageSize.bind(this));\n            }\n        },\n        onOverlayMove: function (event) {\n            var pageX = event.pageX;\n            var containerScroll = this.$('.screen-diff__container').scrollLeft();\n            var elementX = event.currentTarget.getBoundingClientRect().left;\n            var delta = pageX - elementX + containerScroll;\n            this.$('.screen-diff__image-over').width(delta);\n        },\n        onDiffTypeChange: function (event) {\n            settings.save('diffType', event.target.value);\n            this.render();\n        },\n    });\n    allure.api.addTestResultBlock(TestResultView, { position: 'before' });\n    allure.api.addAttachmentViewer('application/vnd.allure.image.diff', {\n        View: AttachmentView,\n        icon: 'fa fa-exchange',\n    });\n})();\n", 
 "history/duration-trend.json": "[{\"data\":{\"duration\":19}}]", 
 "history/retry-trend.json": "[{\"data\":{\"run\":1,\"retry\":0}}]", 
 "history/history.json": "{\"91f7b008e3894837294bd7cf894b0f27\":{\"statistic\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":1,\"unknown\":0,\"total\":1},\"items\":[{\"uid\":\"efbd296aedd30631\",\"status\":\"passed\",\"time\":{\"start\":1775369394642,\"stop\":1775369394661,\"duration\":19}}]}}", 
 "history/categories-trend.json": "[{\"data\":{}}]", 
 "history/history-trend.json": "[{\"data\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":1,\"unknown\":0,\"total\":1}}]", 
 "export/influxDbData.txt": "launch_status failed=0 1775369395000000000\nlaunch_status broken=0 1775369395000000000\nlaunch_status passed=1 1775369395000000000\nlaunch_status skipped=0 1775369395000000000\nlaunch_status unknown=0 1775369395000000000\nlaunch_time duration=19 1775369395000000000\nlaunch_time min_duration=19 1775369395000000000\nlaunch_time max_duration=19 1775369395000000000\nlaunch_time sum_duration=19 1775369395000000000\nlaunch_time start=1775369394642 1775369395000000000\nlaunch_time stop=1775369394661 1775369395000000000\nlaunch_retries retries=0 1775369395000000000\nlaunch_retries run=1 1775369395000000000\n", 
 "export/mail.html": "data:text/html;base64, PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04Ij4KICAgIDx0aXRsZT5BbGx1cmUgUmVwb3J0IHN1bW1hcnkgbWFpbDwvdGl0bGU+CjwvaGVhZD4KPGJvZHk+CiAgICBNYWlsIGJvZHkKPC9ib2R5Pgo8L2h0bWw+Cg==", 
 "export/prometheusData.txt": "launch_status_failed 0\nlaunch_status_broken 0\nlaunch_status_passed 1\nlaunch_status_skipped 0\nlaunch_status_unknown 0\nlaunch_time_duration 19\nlaunch_time_min_duration 19\nlaunch_time_max_duration 19\nlaunch_time_sum_duration 19\nlaunch_time_start 1775369394642\nlaunch_time_stop 1775369394661\nlaunch_retries_retries 0\nlaunch_retries_run 1\n", 
 "data/categories.json": "{\"uid\":\"4b4757e66a1912dae1a509f688f20b0f\",\"name\":\"categories\",\"children\":[]}", 
 "data/categories.csv": "", 
 "data/suites.json": "{\"uid\":\"98d3104e051c652961429bf95fa0b5d6\",\"name\":\"suites\",\"children\":[{\"name\":\"core\",\"children\":[{\"name\":\"TestRunning\",\"children\":[{\"name\":\"TestRunning\",\"children\":[{\"name\":\"test_case_running[case_file0]\",\"uid\":\"efbd296aedd30631\",\"parentUid\":\"ca498cedc17c0db5971981d1316b0013\",\"status\":\"passed\",\"time\":{\"start\":1775369394642,\"stop\":1775369394661,\"duration\":19},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"parameters\":[\"{'base_info': {'project': 'pay-mock', 'module': 'login功能', 'version': 'v1', 'title': '【login功能】【用户名密码登陆验证】f9f7b86d-42ca-49d2-90b0-6e65b6187f17, 74de16ba-3d61-4099-af08-788c9f348de0'}, 'case_steps': [{'function_name': 'login_username', 'url': '{{url}}/login/username', 'method': 'POST', 'headers': {'context-type': 'application/json'}, 'body': {'username': '{{username}}', 'password': '{{password}}'}, 'response_assert': [{'eq': ['$.status', 200]}, {'eq': ['$.message', '{{expected}}']}], 'response_extract': {'token': '$..token'}}], 'test_data': {'title': '用户名密码正确', 'username': 'admin', 'password': '123456', 'expected': 'Login Successful'}}\"],\"tags\":[]}],\"uid\":\"ca498cedc17c0db5971981d1316b0013\"}],\"uid\":\"29ff7be3fa3ea84384143636c2a7306e\"}],\"uid\":\"72796fdbb1ef5e42d7f9951dd4e7356a\"}]}", 
 "data/timeline.json": "{\"uid\":\"ab17fc5a4eb3bca4b216b548c7f9fcbc\",\"name\":\"timeline\",\"children\":[{\"name\":\"1s-MacBook-Pro.local\",\"children\":[{\"name\":\"43902-MainThread\",\"children\":[{\"name\":\"test_case_running[case_file0]\",\"uid\":\"efbd296aedd30631\",\"parentUid\":\"41cd15b4616e5de89ab5227c07bd7890\",\"status\":\"passed\",\"time\":{\"start\":1775369394642,\"stop\":1775369394661,\"duration\":19},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"parameters\":[\"{'base_info': {'project': 'pay-mock', 'module': 'login功能', 'version': 'v1', 'title': '【login功能】【用户名密码登陆验证】f9f7b86d-42ca-49d2-90b0-6e65b6187f17, 74de16ba-3d61-4099-af08-788c9f348de0'}, 'case_steps': [{'function_name': 'login_username', 'url': '{{url}}/login/username', 'method': 'POST', 'headers': {'context-type': 'application/json'}, 'body': {'username': '{{username}}', 'password': '{{password}}'}, 'response_assert': [{'eq': ['$.status', 200]}, {'eq': ['$.message', '{{expected}}']}], 'response_extract': {'token': '$..token'}}], 'test_data': {'title': '用户名密码正确', 'username': 'admin', 'password': '123456', 'expected': 'Login Successful'}}\"],\"tags\":[]}],\"uid\":\"41cd15b4616e5de89ab5227c07bd7890\"}],\"uid\":\"2a67529a15c2bfd1ba338aa37560e67d\"}]}", 
 "data/packages.json": "{\"uid\":\"83edc06c07f9ae9e47eb6dd1b683e4e2\",\"name\":\"packages\",\"children\":[{\"name\":\"core.TestRunning\",\"children\":[{\"name\":\"test_case_running[case_file0]\",\"uid\":\"efbd296aedd30631\",\"parentUid\":\"0abe18979c6fe2f1469a020423d5d6e2\",\"status\":\"passed\",\"time\":{\"start\":1775369394642,\"stop\":1775369394661,\"duration\":19},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"parameters\":[\"{'base_info': {'project': 'pay-mock', 'module': 'login功能', 'version': 'v1', 'title': '【login功能】【用户名密码登陆验证】f9f7b86d-42ca-49d2-90b0-6e65b6187f17, 74de16ba-3d61-4099-af08-788c9f348de0'}, 'case_steps': [{'function_name': 'login_username', 'url': '{{url}}/login/username', 'method': 'POST', 'headers': {'context-type': 'application/json'}, 'body': {'username': '{{username}}', 'password': '{{password}}'}, 'response_assert': [{'eq': ['$.status', 200]}, {'eq': ['$.message', '{{expected}}']}], 'response_extract': {'token': '$..token'}}], 'test_data': {'title': '用户名密码正确', 'username': 'admin', 'password': '123456', 'expected': 'Login Successful'}}\"],\"tags\":[]}],\"uid\":\"core.TestRunning\"}]}", 
 "data/suites.csv": "\"DESCRIPTION\",\"DURATION IN MS\",\"NAME\",\"PARENT SUITE\",\"START TIME\",\"STATUS\",\"STOP TIME\",\"SUB SUITE\",\"SUITE\",\"TEST CLASS\",\"TEST METHOD\"\n\"\",\"19\",\"test_case_running[case_file0]\",\"core\",\"2026-04-05\",\"passed\",\"2026-04-05\",\"TestRunning\",\"TestRunning\",\"\",\"\"\n", 
 "data/behaviors.json": "{\"uid\":\"b1a8273437954620fa374b796ffaacdd\",\"name\":\"behaviors\",\"children\":[{\"name\":\"login功能\",\"children\":[{\"name\":\"【login功能】【用户名密码登陆验证】f9f7b86d-42ca-49d2-90b0-6e65b6187f17, 74de16ba-3d61-4099-af08-788c9f348de0\",\"children\":[{\"name\":\"test_case_running[case_file0]\",\"uid\":\"efbd296aedd30631\",\"parentUid\":\"9b80b43e308a8ae926fbdc59fff56654\",\"status\":\"passed\",\"time\":{\"start\":1775369394642,\"stop\":1775369394661,\"duration\":19},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"parameters\":[\"{'base_info': {'project': 'pay-mock', 'module': 'login功能', 'version': 'v1', 'title': '【login功能】【用户名密码登陆验证】f9f7b86d-42ca-49d2-90b0-6e65b6187f17, 74de16ba-3d61-4099-af08-788c9f348de0'}, 'case_steps': [{'function_name': 'login_username', 'url': '{{url}}/login/username', 'method': 'POST', 'headers': {'context-type': 'application/json'}, 'body': {'username': '{{username}}', 'password': '{{password}}'}, 'response_assert': [{'eq': ['$.status', 200]}, {'eq': ['$.message', '{{expected}}']}], 'response_extract': {'token': '$..token'}}], 'test_data': {'title': '用户名密码正确', 'username': 'admin', 'password': '123456', 'expected': 'Login Successful'}}\"],\"tags\":[]}],\"uid\":\"9b80b43e308a8ae926fbdc59fff56654\"}],\"uid\":\"48f67514baa2ff6cd1c6cc315b454f16\"}]}", 
 "data/behaviors.csv": "\"BROKEN\",\"EPIC\",\"FAILED\",\"FEATURE\",\"PASSED\",\"SKIPPED\",\"STORY\",\"UNKNOWN\"\n\"0\",\"\",\"0\",\"login功能\",\"1\",\"0\",\"【login功能】【用户名密码登陆验证】f9f7b86d-42ca-49d2-90b0-6e65b6187f17, 74de16ba-3d61-4099-af08-788c9f348de0\",\"0\"\n", 
 "data/test-cases/efbd296aedd30631.json": "{\"uid\":\"efbd296aedd30631\",\"name\":\"test_case_running[case_file0]\",\"fullName\":\"core.TestRunning.TestRunning#test_case_running\",\"historyId\":\"91f7b008e3894837294bd7cf894b0f27\",\"time\":{\"start\":1775369394642,\"stop\":1775369394661,\"duration\":19},\"status\":\"passed\",\"flaky\":false,\"newFailed\":false,\"newBroken\":false,\"newPassed\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"beforeStages\":[],\"testStage\":{\"status\":\"passed\",\"steps\":[{\"time\":{\"start\":1775369394644,\"stop\":1775369394661,\"duration\":17},\"status\":\"passed\",\"steps\":[],\"attachments\":[{\"uid\":\"18b593253b5dfb83\",\"name\":\"请求参数\",\"source\":\"18b593253b5dfb83.json\",\"type\":\"application/json\",\"size\":43},{\"uid\":\"81472aa3eb78c5aa\",\"name\":\"响应参数\",\"source\":\"81472aa3eb78c5aa.json\",\"type\":\"application/json\",\"size\":77}],\"parameters\":[],\"hasContent\":true,\"shouldDisplayMessage\":false,\"stepsCount\":0,\"attachmentsCount\":2,\"attachmentStep\":false}],\"attachments\":[{\"uid\":\"8972976b6ccaf86a\",\"name\":\"stdout\",\"source\":\"8972976b6ccaf86a.txt\",\"type\":\"text/plain\",\"size\":302}],\"parameters\":[],\"hasContent\":true,\"shouldDisplayMessage\":false,\"stepsCount\":1,\"attachmentsCount\":3,\"attachmentStep\":false},\"afterStages\":[],\"labels\":[{\"name\":\"feature\",\"value\":\"login功能\"},{\"name\":\"story\",\"value\":\"【login功能】【用户名密码登陆验证】f9f7b86d-42ca-49d2-90b0-6e65b6187f17, 74de16ba-3d61-4099-af08-788c9f348de0\"},{\"name\":\"parentSuite\",\"value\":\"core\"},{\"name\":\"suite\",\"value\":\"TestRunning\"},{\"name\":\"subSuite\",\"value\":\"TestRunning\"},{\"name\":\"host\",\"value\":\"1s-MacBook-Pro.local\"},{\"name\":\"thread\",\"value\":\"43902-MainThread\"},{\"name\":\"framework\",\"value\":\"pytest\"},{\"name\":\"language\",\"value\":\"cpython3\"},{\"name\":\"package\",\"value\":\"core.TestRunning\"},{\"name\":\"resultFormat\",\"value\":\"allure2\"}],\"parameters\":[{\"name\":\"case_file\",\"value\":\"{'base_info': {'project': 'pay-mock', 'module': 'login功能', 'version': 'v1', 'title': '【login功能】【用户名密码登陆验证】f9f7b86d-42ca-49d2-90b0-6e65b6187f17, 74de16ba-3d61-4099-af08-788c9f348de0'}, 'case_steps': [{'function_name': 'login_username', 'url': '{{url}}/login/username', 'method': 'POST', 'headers': {'context-type': 'application/json'}, 'body': {'username': '{{username}}', 'password': '{{password}}'}, 'response_assert': [{'eq': ['$.status', 200]}, {'eq': ['$.message', '{{expected}}']}], 'response_extract': {'token': '$..token'}}], 'test_data': {'title': '用户名密码正确', 'username': 'admin', 'password': '123456', 'expected': 'Login Successful'}}\"}],\"links\":[],\"hidden\":false,\"retry\":false,\"extra\":{\"severity\":\"normal\",\"retries\":[],\"categories\":[],\"tags\":[]},\"source\":\"efbd296aedd30631.json\",\"parameterValues\":[\"{'base_info': {'project': 'pay-mock', 'module': 'login功能', 'version': 'v1', 'title': '【login功能】【用户名密码登陆验证】f9f7b86d-42ca-49d2-90b0-6e65b6187f17, 74de16ba-3d61-4099-af08-788c9f348de0'}, 'case_steps': [{'function_name': 'login_username', 'url': '{{url}}/login/username', 'method': 'POST', 'headers': {'context-type': 'application/json'}, 'body': {'username': '{{username}}', 'password': '{{password}}'}, 'response_assert': [{'eq': ['$.status', 200]}, {'eq': ['$.message', '{{expected}}']}], 'response_extract': {'token': '$..token'}}], 'test_data': {'title': '用户名密码正确', 'username': 'admin', 'password': '123456', 'expected': 'Login Successful'}}\"]}", 
 "data/attachments/81472aa3eb78c5aa.json": "{'message': 'Login Successful', 'status': 200, 'token': '1234567890abcdefgh'}", 
 "data/attachments/8972976b6ccaf86a.txt": "http://127.0.0.1:5000/login/username\n====&gt;&gt;&gt; move in login_username function\n====&gt;&gt;&gt; move in all_assert function\n[{'eq': ['$.status', 200]}, {'eq': ['$.message', 'Login Successful']}]\n{'message': 'Login Successful', 'status': 200, 'token': '1234567890abcdefgh'}\n====&gt;&gt;&gt; move in response_parse function\n", 
 "data/attachments/18b593253b5dfb83.json": "{'username': 'admin', 'password': '123456'}", 
 "widgets/categories.json": "{\"total\":0,\"items\":[]}", 
 "widgets/summary.json": "{\"reportName\":\"Allure Report\",\"testRuns\":[],\"statistic\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":1,\"unknown\":0,\"total\":1},\"time\":{\"start\":1775369394642,\"stop\":1775369394661,\"duration\":19,\"minDuration\":19,\"maxDuration\":19,\"sumDuration\":19}}", 
 "widgets/executors.json": "[]", 
 "widgets/duration-trend.json": "[{\"data\":{\"duration\":19}}]", 
 "widgets/status-chart.json": "[{\"uid\":\"efbd296aedd30631\",\"name\":\"test_case_running[case_file0]\",\"time\":{\"start\":1775369394642,\"stop\":1775369394661,\"duration\":19},\"status\":\"passed\",\"severity\":\"normal\"}]", 
 "widgets/suites.json": "{\"total\":1,\"items\":[{\"uid\":\"72796fdbb1ef5e42d7f9951dd4e7356a\",\"name\":\"core\",\"statistic\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":1,\"unknown\":0,\"total\":1}}]}", 
 "widgets/retry-trend.json": "[{\"data\":{\"run\":1,\"retry\":0}}]", 
 "widgets/categories-trend.json": "[{\"data\":{}}]", 
 "widgets/severity.json": "[{\"uid\":\"efbd296aedd30631\",\"name\":\"test_case_running[case_file0]\",\"time\":{\"start\":1775369394642,\"stop\":1775369394661,\"duration\":19},\"status\":\"passed\",\"severity\":\"normal\"}]", 
 "widgets/history-trend.json": "[{\"data\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":1,\"unknown\":0,\"total\":1}}]", 
 "widgets/launch.json": "[]", 
 "widgets/behaviors.json": "{\"total\":1,\"items\":[{\"uid\":\"48f67514baa2ff6cd1c6cc315b454f16\",\"name\":\"login功能\",\"statistic\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":1,\"unknown\":0,\"total\":1}}]}", 
 "widgets/duration.json": "[{\"uid\":\"efbd296aedd30631\",\"name\":\"test_case_running[case_file0]\",\"time\":{\"start\":1775369394642,\"stop\":1775369394661,\"duration\":19},\"status\":\"passed\",\"severity\":\"normal\"}]", 
 "widgets/environment.json": "[]", 
};
    var server = sinon.fakeServer.create();

                server.respondWith("GET", "plugin/behaviors/index.js", [
                      200, { "Content-Type": "application/javascript" }, server_data["plugin/behaviors/index.js"],
                ]);
            
                server.respondWith("GET", "plugin/packages/index.js", [
                      200, { "Content-Type": "application/javascript" }, server_data["plugin/packages/index.js"],
                ]);
            
                server.respondWith("GET", "plugin/screen-diff/styles.css", [
                      200, { "Content-Type": "text/css" }, server_data["plugin/screen-diff/styles.css"],
                ]);
            
                server.respondWith("GET", "plugin/screen-diff/index.js", [
                      200, { "Content-Type": "application/javascript" }, server_data["plugin/screen-diff/index.js"],
                ]);
            
                server.respondWith("GET", "history/duration-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/duration-trend.json"],
                ]);
            
                server.respondWith("GET", "history/retry-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/retry-trend.json"],
                ]);
            
                server.respondWith("GET", "history/history.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/history.json"],
                ]);
            
                server.respondWith("GET", "history/categories-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/categories-trend.json"],
                ]);
            
                server.respondWith("GET", "history/history-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/history-trend.json"],
                ]);
            
                server.respondWith("GET", "export/influxDbData.txt", [
                      200, { "Content-Type": "text/plain;charset=UTF-8" }, server_data["export/influxDbData.txt"],
                ]);
            
                server.respondWith("GET", "export/mail.html", [
                      200, { "Content-Type": "text/html" }, server_data["export/mail.html"],
                ]);
            
                server.respondWith("GET", "export/prometheusData.txt", [
                      200, { "Content-Type": "text/plain;charset=UTF-8" }, server_data["export/prometheusData.txt"],
                ]);
            
                server.respondWith("GET", "data/categories.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/categories.json"],
                ]);
            
                server.respondWith("GET", "data/categories.csv", [
                      200, { "Content-Type": "text/csv" }, server_data["data/categories.csv"],
                ]);
            
                server.respondWith("GET", "data/suites.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/suites.json"],
                ]);
            
                server.respondWith("GET", "data/timeline.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/timeline.json"],
                ]);
            
                server.respondWith("GET", "data/packages.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/packages.json"],
                ]);
            
                server.respondWith("GET", "data/suites.csv", [
                      200, { "Content-Type": "text/csv" }, server_data["data/suites.csv"],
                ]);
            
                server.respondWith("GET", "data/behaviors.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/behaviors.json"],
                ]);
            
                server.respondWith("GET", "data/behaviors.csv", [
                      200, { "Content-Type": "text/csv" }, server_data["data/behaviors.csv"],
                ]);
            
                server.respondWith("GET", "data/test-cases/efbd296aedd30631.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/test-cases/efbd296aedd30631.json"],
                ]);
            
                server.respondWith("GET", "data/attachments/81472aa3eb78c5aa.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/attachments/81472aa3eb78c5aa.json"],
                ]);
            
                server.respondWith("GET", "data/attachments/8972976b6ccaf86a.txt", [
                      200, { "Content-Type": "text/plain;charset=UTF-8" }, server_data["data/attachments/8972976b6ccaf86a.txt"],
                ]);
            
                server.respondWith("GET", "data/attachments/18b593253b5dfb83.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/attachments/18b593253b5dfb83.json"],
                ]);
            
                server.respondWith("GET", "widgets/categories.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/categories.json"],
                ]);
            
                server.respondWith("GET", "widgets/summary.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/summary.json"],
                ]);
            
                server.respondWith("GET", "widgets/executors.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/executors.json"],
                ]);
            
                server.respondWith("GET", "widgets/duration-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/duration-trend.json"],
                ]);
            
                server.respondWith("GET", "widgets/status-chart.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/status-chart.json"],
                ]);
            
                server.respondWith("GET", "widgets/suites.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/suites.json"],
                ]);
            
                server.respondWith("GET", "widgets/retry-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/retry-trend.json"],
                ]);
            
                server.respondWith("GET", "widgets/categories-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/categories-trend.json"],
                ]);
            
                server.respondWith("GET", "widgets/severity.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/severity.json"],
                ]);
            
                server.respondWith("GET", "widgets/history-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/history-trend.json"],
                ]);
            
                server.respondWith("GET", "widgets/launch.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/launch.json"],
                ]);
            
                server.respondWith("GET", "widgets/behaviors.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/behaviors.json"],
                ]);
            
                server.respondWith("GET", "widgets/duration.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/duration.json"],
                ]);
            
                server.respondWith("GET", "widgets/environment.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/environment.json"],
                ]);
            server.autoRespond = true;