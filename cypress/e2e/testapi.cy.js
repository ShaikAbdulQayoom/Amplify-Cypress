describe('GraphQL API Testing', () => {
    it('should return list of todos', () => {
      cy.fixture('listtodo.graphql').then((graphqlQuery) => {
        cy.fixture('listtodo.json').then((variables) => {
          cy.request({
            method: 'POST',
            url: 'https://5xp2dsgwnnbqxpgfopycnp3jkq.appsync-api.us-east-1.amazonaws.com/graphql',
            headers: {
              'X-Api-Key': 'da2-gzb6jcwcybe5rjcufjg5deq3r4'
            },
            body: {
              query: graphqlQuery,
              variables: variables
            }
          }).then(response => {
            cy.log(response.body); 
            cy.writeFile('response.json', response.body);
            expect(response.status).to.eq(200);
            console.log(response); 
          });
        });
      });
    });
 
    it('Create todos', () => {
      cy.fixture('todo.graphql').then((graphqlQuery) => {
        cy.fixture('todo.json').then((variables) => {
          cy.request({
            method: 'POST',
            url: 'https://5xp2dsgwnnbqxpgfopycnp3jkq.appsync-api.us-east-1.amazonaws.com/graphql',
            headers: {
              'X-Api-Key': 'da2-gzb6jcwcybe5rjcufjg5deq3r4'
            },
            body: {
              query: graphqlQuery,
              variables: variables
            }
          }).then(response => {
            cy.log(response.body); 
            cy.writeFile('response.json', response.body);
            expect(response.status).to.eq(200);
            console.log(response); 
          });
        });
      });
    });
 
  });