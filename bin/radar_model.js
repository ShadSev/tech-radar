const util = require('util')

// Tech radar object model. Used by the builder.
module.exports = {
  createModel: function() {
    var radar = {
      title: 'Extenda Retail Tech Radar',
      edition: process.env.EDITION,

      // Quadrants in the radar visualization order.
      quadrants: [
        {
          dirname: 'techniques',
          name: 'Techniques'
        },
        {
          dirname: 'infrastructure_config',
          name: 'Infrastructure & Configuration'
        },
        {
          dirname: 'languages_frameworks',
          name: 'Languages & Frameworks'
        },
        {
          dirname: 'data_management',
          name: 'Data Management'
        }
      ],

      // Quadrants in the order we want them in the navbar.
      quadrantsNavigation: function() {
        return [
          this.quadrants[2],
          this.quadrants[3],
          this.quadrants[1],
          this.quadrants[0]
        ]
      },

      rings: [
        'ADOPT',
        'TRIAL',
        'ASSESS',
        'HOLD'
      ],
      blips: [],
      entries: function() {
        return util.inspect(this.blips)
      }
    }

    for (var q of radar.quadrants) {
      q.adopt = []
      q.assess = []
      q.trial = []
      q.hold = []
    }

    return radar
  }
}
