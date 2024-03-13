module.exports = {
  apps: [{
    name: 'github-actions-test',
    script: 'node_modules/.bin/next',
    args: 'dev -p 3002',
  }],
};