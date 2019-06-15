module.exports = {
  name: 'delver',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/delver',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
