const aws = require('aws-sdk');
const { createReadStream, readFileSync } = require('fs');


aws.config.update({
  accessKeyId: 'AKIATBZ4FVWCM7JBUX73',
  secretAccessKey: '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',
});

const s3 = new aws.S3();

const resolvers = {
  Query: {
    message: () => 'Hello World',
  },
  
  Mutation: {
    uploadVideos: async (_, args) => {
      const { filename, file } = args;

      const decodedFile = Buffer.from(file, 'base64');

      // set up the parameters for the upload
      const params = {
        Bucket: 'uploadvideos',
        Key: filename,
        Body: decodedFile,
      };
      
      s3.upload(params, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Successfully uploaded file to ${data.Location}`);
      }
    });
      return 'success'
    }
  }
};

module.exports = resolvers
