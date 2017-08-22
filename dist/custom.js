$(document)
  .ready(function() {
    var preSaleDate  = "2017-10-01";
    var icoStartDate = "2017-11-01";
    var icoEndDate   = "2017-12-15";

    // fix menu when passed
    $('.masthead')
      .visibility({
        once: false,
        onBottomPassed: function() {
          $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function() {
          $('.fixed.menu').transition('fade out');
        }
      });

    $('.overlay').visibility({
      type: 'fixed',
      offset: 80,
      onFixed: function() {
        $(this).css("top", "calc(100% - 25px - 1.5em)");
      },
      onUnfixed: function() {
        $(this).css("top", "");
      }
    });

    // lazy load images
    $('.image').visibility({
      type: 'image',
      transition: 'vertical flip in',
      duration: 500
    });

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item');

    // show dropdown on hover
    $('.main.menu .ui.dropdown').dropdown({
      on: 'hover',
      transition: 'swing down',
      onChange: function(value, text, $choice) {
        if($choice.attr("data-type") == "link" && $("#" + value).length != 0) {
          $(document.body).animate({
            "scrollTop": $("#" + value).offset().top
          }, "fast");
        }
        if($choice.attr("data-type") == "lang") {
          i18next.changeLanguage(value, function (err, t) {
            i18next_render(err, t);
            if (err) {
              return console.log('something went wrong loading', err);
            }
          });
        }
      }
    });

    $('.gray-gradient.segment')
      .visibility({
        once       : false,
        continuous : true,
        onPassing  : function(calculations) {
          var newColor = 'rgba(234, 234, 234, ' + calculations.percentagePassed +')';
          $(this).css('background-color', newColor);
        }
      });

    $('.ui.accordion')
      .accordion();

    var datepresale1 = new Date();
    var datepresale2 = new Date(preSaleDate); // October
    var timepresaleDiff = Math.abs(datepresale2.getTime() - datepresale1.getTime());
    var diffpresaleDays = Math.ceil(timepresaleDiff / (1000 * 3600 * 24));

    $('#pre-sale-counter').attr('data-percent', 100-diffpresaleDays);
    $('#pre-sale-counter').progress();

    var dateico1 = new Date();
    var dateico2 = new Date(icoStartDate); // November
    var timeicoDiff = Math.abs(dateico2.getTime() - dateico1.getTime());
    var difficoDays = Math.ceil(timeicoDiff / (1000 * 3600 * 24));

    $('#ico-counter').attr('data-percent', 100-difficoDays);
    $('#ico-counter').progress();

    i18next
    	.use(window.i18nextBrowserLanguageDetector)
      .use(window.i18nextXHRBackend)
    	.init({
        backend: {
          // for all available options read the backend's repository readme file
          loadPath: 'locales/{{lng}}/{{ns}}.json',
          whitelist: ['en', 'es', 'de', 'ru', 'fr', 'jp', 'ch', 'kr'],
          fallbackLng: 'en'
        }
    	}, function(err, t) {
        i18next_render(err, t);
        $('.ui.dropdown.language').dropdown('set selected', [i18next.language]);
      });

    var i18next_render = function(err, t) {
      moment.locale(i18next.language);
      // initialized and ready to go!
      var names = ['top',
                   'description',
                   'brief',
                   'solution',
                   'roadmap',
                   'opportunities',
                   'pre-sale',
                   'ico',
                   'tokens',
                   'bounty',
                   'team',
                   'documents',
                   'info',
                   'channels',
                   'faq',
                   'ico-wallet',
                   'calendar-store',
                   'from',
                   'to',
                   'period-pre-sale',
                   'period-ico',
                   'tokens',
                   'bonuses',
                   'bonuses-period',
                   'bonuses-tokens',
                   'bonuses-period-pre-sale',
                   'bonuses-period-1st',
                   'bonuses-period-2-7',
                   'bonuses-period-2week',
                   'bonuses-period-3week',
                   'bonuses-period-4week',
                   'bonuses-period-5week',
                   'name-share',
                   'among-users',
                   'purchased-fund',
                   'incentive-campaign',
                   'menu',
                   'rights',
                   'whitepaper',
                   'terms-conditions',
                   'privacy-policy',
                   'business-model',
                   'escrow-agreement',
                   'first-crypto',
                   'invest-london',
                   'brief-title-1',
                   'brief-content-1',
                   'brief-title-2',
                   'brief-content-2',
                   'brief-title-3',
                   'brief-content-3',
                   'solution-title',
                   'solution-content',
                   'jun-1',
                   'jun-1-content',
                   'jul-1',
                   'jul-1-content',
                   'aug-10',
                   'aug-10-content',
                   'oct-1',
                   'oct-1-content',
                   '1-q',
                   '1-q-content',
                   '4-q',
                   '4-q-content',
                   'opportunities-title-1',
                   'opportunities-content-1',
                   'opportunities-title-2',
                   'opportunities-content-2',
                   'team-public-profiles',
                   'team-ceo-name',
                   'team-ceo-position',
                   'team-ceo-description',
                   'team-cto-name',
                   'team-cto-position',
                   'team-cto-description',
                   'team-managing-director-name',
                   'team-managing-director-position',
                   'team-managing-director-description',
                   'team-vacancy-name',
                   'team-vacancy-position',
                   'main-documents',
                   'read-carefully',
                   'unsubscribe',
                   'submit',
                   'participate-application',
                   'participate-pre-sale',
                   'pre-sale-submit',
                   'form-completed',
                   'form-completed-subscription',
                   'form-completed-pre-sale',
                   'form-warning',
                   'form-warning-subscription',
                   'form-warning-pre-sale',
                   'faq-1-title',
                   'faq-1-content',
                   'faq-2-title',
                   'faq-2-content',
                   'faq-3-title',
                   'faq-3-content',
                   'faq-5-title',
                   'faq-5-content',
                   'faq-6-title',
                   'faq-6-content',
                   'faq-7-title',
                   'faq-7-content',
                   'faq-8-title',
                   'faq-8-content',
                   'faq-9-title',
                   'faq-9-content',
                   'faq-10-title',
                   'faq-10-content',
                   'faq-11-title',
                   'faq-11-content',
                   'faq-12-title',
                   'faq-12-content',
                   'faq-13-title',
                   'faq-13-content',
                   'faq-14-title',
                   'faq-14-content',
                   'faq-15-title',
                   'faq-15-content',
                   'faq-16-title',
                   'faq-16-content',
                   'faq-17-title',
                   'faq-17-content',
                   'faq-18-title',
                   'faq-18-content',
                   'faq-19-title',
                   'faq-19-content',
                   'faq-20-title',
                   'faq-20-content',
                   'faq-21-title',
                   'faq-21-content',
                   'faq-22-title',
                   'faq-22-content',
                   'faq-23-title',
                   'faq-23-content',
                   'faq-24-title',
                   'faq-24-content'
                 ];

      for(var i in names) {
        $(".i18n-" + names[i]).html(i18next.t('i18n-' + names[i]));
      }

      $(".moment-pre-sale-end").html(moment(preSaleDate).format('ddd, MMMM D (Y) HH:mm UTC'));
      $(".moment-ico-start").html(moment(icoStartDate).format('ddd, MMMM D (Y) HH:mm UTC'));
      $(".moment-ico-end").html(moment(icoEndDate).format('ddd, MMMM D (Y) HH:mm UTC'));

      $('#pre-sale-counter').find('.label').html(i18next.t('i18n-pre-sale-day-remain', {count: new Number(diffpresaleDays).valueOf()}));
      $('#ico-counter').find('.label').html(i18next.t('i18n-ico-day-remain', {count: new Number(difficoDays).valueOf()}));

      $('.i18n-team-vacancy-description').html(i18next.t('i18n-team-vacancy-description', {resume: '<a href="mailto:support@xred.co">' + i18next.t('i18n-team-send-cv') + '</a>'}));
      $('.i18n-e-mail').attr('placeholder', i18next.t('i18n-e-mail'));

      document.title = i18next.t('i18n-title-page');

      /**
       * Vega.js
       **/

      function addVgExample(path, id, options) {
        d3.json(path, function (error, vgSpec) {
          if (error) {
            return console.error(error);
          }
          var runtime = vega.parse(vgSpec);
          var view = new vega.View(runtime)
            .initialize(document.querySelector(id))
            .hover()
            .run();
          vegaTooltip.vega(view, options);
        })
      }

      var tokensOpts = {
        showAllFields: false,
        fields: [
          {
            field: "percents",
            title: "%",
            formatType: "number"
          }
        ]
      }
      addVgExample("assets/token-pie.vg.json", "#token-distribution", tokensOpts);

      var bonusesOpts = {
        showAllFields: false,
        fields: []
      }

      addVgExample("assets/bonuses-radial.vg.json", "#token-bonus", bonusesOpts);

      /**
       * Form validations
      **/
      $('.ui.form.subscription')
      .form({
        fields: {
          'email-subscription': {
            identifier : 'email-subscription',
            rules: [
              {
                type   : 'email',
                prompt : i18next.t('i18n-e-mail-invalid')
              }
            ]
          }
        }
      });

      $('.ui.form.pre-sale')
      .form({
        fields: {
          'email': {
            identifier : 'email',
            rules: [
              {
                type   : 'email',
                prompt : i18next.t('i18n-e-mail-invalid')
              }
            ]
          }
        },
        onSuccess: function(event, fields) {
          event.preventDefault();

          // Use Ajax to submit form data
          var url = 'https://script.google.com/macros/s/AKfycbxYvRZ8DJBa8CwHUVl1aSUlSyIOgLQsL0tqNKADfpOXC7rI-rDs/exec';
          // show the loading
          $('.pre-sale').addClass('loading');
          var jqxhr = $.post(url, fields, function(data) {
             console.log("Success! Data: " + data.statusText);
             $('.pre-sale').removeClass('loading').addClass('success');
          })
          .fail(function(data) {
             console.warn("Error! Data: " + data.statusText);
             $('.pre-sale').removeClass('loading');
             // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
             if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                //Success!
                $('.pre-sale').addClass('success');
             } else {
               $('.pre-sale').addClass('warning');
             }
          });
        }
      });

      $('.ui.form.subscription')
      .form({
        fields: {
          'email': {
            identifier : 'email',
            rules: [
              {
                type   : 'email',
                prompt : i18next.t('i18n-e-mail-invalid')
              }
            ]
          }
        },
        onSuccess: function(event, fields) {
          event.preventDefault();

          // Use Ajax to submit form data
          var url = 'https://script.google.com/macros/s/AKfycbxUYRxHb8All5p6fApItKM5f6XwOkrpHqewJFe2iWTN3mWPwMY/exec';
          // show the loading
          $('.subscription').addClass('loading');
          var jqxhr = $.post(url, fields, function(data) {
             console.log("Success! Data: " + data.statusText);
             $('.subscription').removeClass('loading').addClass('success');
          })
          .fail(function(data) {
             console.warn("Error! Data: " + data.statusText);
             $('.subscription').removeClass('loading');
             // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
             if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                 //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                 console.log("Success! Data: " + data.statusText);
                 //Success!
                 $('.subscription').addClass('success');
             } else {
               $('.subscription').addClass('warning');
             }
          });
        }
      });
    }
});
