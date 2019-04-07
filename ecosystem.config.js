module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'Shift',
      script    : 'index.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "admin",
      host : ["nodelive1.burst", "nodelive2.burst"],
      ref  : 'origin/master',
      repo : 'git@github.com/codechito/shift.git',
      path : "/home/admin/deploy/pm2/staging/shift",
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'node',
      host : '127.0.0.1',
      ref  : 'origin/master',
      repo : 'git@github.com/codechito/shift.git',
      path : "/Users/TimeLord/Work/codechito/shift",
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
