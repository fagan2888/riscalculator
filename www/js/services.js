angular.module('app.services', [])

.service('RiscService', [function () {
  var out = {'params': []};
  out['setParams'] = function (params) {
    out['params'] = params;
  };

  function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  function risc(type, years) {
    var params = out['params'];
    var a = 0.13552 + params['wbc'] * 0.02572;
    a += (params['ecog_ps'] == '1' ? 1 : 0) * 0.56707 + (params['ecog_ps'] == '>1' ? 1 : 0) * 0.87262 +
      (params['ecog_ps'] == 'N/A' ? 1 : 0) * 0.42481;
    a -= params['bmi'] * 0.04052;
    a += params['metastases'] * 0.51655;
    a += (params['ethnicity'] == 'Hispanic/Latino' ? 1 : 0) * 0.35295
      - (params['ethnicity'] == 'Not Hispanic Latino / Black' ? 1 : 0) * 0.25994
      - (params['ethnicity'] == 'Other/mixed' ? 1 : 0) * 0.80970
      - (params['ethnicity'] == 'N/A' ? 1 : 0) * 0.47685;
    a += params['perioperative_sys_therapy'] * 0.32529;

    if (type == 2) {
      a *= 0.83558;
      a -= 0.91268;
      a += (params['response'] == 'PR' ? 1 : 0) * 0.83128;
      a += (params['response'] == 'SD' ? 1 : 0) * 0.90433;
      a += (params['response'] == 'PD' ? 1 : 0) * 1.57956;
      s = {
        'carboplatin': {1: 0.4710411758805816, 2: 0.2817232612545971, 5: 0.08216402719015906},
        'cisplatin': {1: 0.5447510356474909, 2: 0.2842434527979097, 5: 0.11867802412532705}
      }[params['ct_type']][years];
    } else {
      s = {
        'carboplatin': {1: 0.4930593741569007, 2: 0.2531207780816966, 5: 0.08480396376295971},
        'cisplatin': {1: 0.6577439939912046, 2: 0.3108963734898609, 5: 0.13394179604770862}
      }[params['ct_type']][years];
    }
    var p = Math.pow(s, Math.exp(a)).toFixed(4).substr(0, 4);
    return (p);
  }

  out['computeRisc1Year1'] = function () {
    return risc(1, 1);
  };
  out['computeRisc1Year2'] = function () {
    return risc(1, 2);
  };
  out['computeRisc1Year5'] = function () {
    return risc(1, 5);
  };

  out['computeRisc2Year1'] = function () {
    console.log("called");
    return risc(2, 1);
  };
  out['computeRisc2Year2'] = function () {
    return risc(2, 2);
  };
  out['computeRisc2Year5'] = function () {
    return risc(2, 5);
  };

  return out;
}]);
