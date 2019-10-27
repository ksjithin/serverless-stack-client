const dev = {
    STRIPE_KEY: "pk_test_2AvQ1eMdDd7fJN1Jen86LfOZ00lcij9uK6",
    s3: {
      REGION: "ap-south-1",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-qqurvq1zmci0"
    },
    apiGateway: {
      REGION: "ap-south-1",
      URL: "https://2p02tjmhea.execute-api.ap-south-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-south-1",
      USER_POOL_ID: "ap-south-1_99UkwxnIu",
      APP_CLIENT_ID: "4l8m02g87i5tn3eoera7o5ftla",
      IDENTITY_POOL_ID: "ap-south-1:caf55c32-7f25-4d02-9f30-d9274d66d07a"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_2AvQ1eMdDd7fJN1Jen86LfOZ00lcij9uK6",
    s3: {
      REGION: "ap-south-1",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-qqurvq1zmci0"
    },
    apiGateway: {
      REGION: "ap-south-1",
      URL: "https://2p02tjmhea.execute-api.ap-south-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "ap-south-1",
      USER_POOL_ID: "ap-south-1_99UkwxnIu",
      APP_CLIENT_ID: "4l8m02g87i5tn3eoera7o5ftla",
      IDENTITY_POOL_ID: "ap-south-1:caf55c32-7f25-4d02-9f30-d9274d66d07a"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };