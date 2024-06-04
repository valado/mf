const content = `
{
  "apps": [
    {
      "key": "example-mfed",
      "name": "MFED",
      "config": {
        "moduleFederated": {
          "url": "http://localhost:4201/mfed.js",
          "remoteScope": "mf_example_remote",
          "dependencies": [
            { "name": "react", "version": "18.2.0", "react-dom": "18.2.0" }
          ]
        },
        "webComponent": {
          "url": "http://localhost:4202/main.js",
          "customTag": "example-remote"
        }
      }
    },
    {
      "key": "example-wcomp",
      "name": "WCOMP",
      "config": {
        "moduleFederated": {
          "url": "http://localhost:4201/mfed.js",
          "remoteScope": "mf_example_remote",
          "dependencies": [
            { "name": "react", "version": "18.2.1", "react-dom": "18.2.0" }
          ]
        },
        "webComponent": {
          "url": "http://localhost:4202/main.js",
          "customTag": "example-remote"
        }
      }
    }
  ]
}
`;

export default content;
