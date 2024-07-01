class ApiPage {
  getClientOptions(endpoint) {
    cy.request({
      method: 'GET',
      url: `https://generator.swagger.io/api${endpoint}`,
      headers: {
        'accept': 'application/json'
      },
      failOnStatusCode: false
    }).then(response => {
      cy.log('Response:', response);

      if (response.status !== 200) {
        throw new Error(`Expected status 200 but got ${response.status}`);
      }
      cy.wrap(response.body).as('clientOptions');
    });
  }

  postClient(endpoint) {
    cy.request({
      method: 'POST',
      url: `https://generator.swagger.io/api${endpoint}`,
      body: {
        spec: {},
        options: {
          additionalProp1: "string",
          additionalProp2: "string",
          additionalProp3: "string"
        },
        swaggerUrl: "http://petstore.swagger.io/v2/swagger.json",
        authorizationValue: {
          value: "string",
          type: "string",
          keyName: "string",
          urlMatcher: {}
        },
        usingFlattenSpec: true,
        securityDefinition: {
          type: "string",
          description: "string"
        }
      },
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then(response => {
      cy.log('Response:', response);

      if (response.status !== 200) {
        throw new Error(`Expected status 200 but got ${response.status}`);
      }
    });
  }
}

export default ApiPage;
