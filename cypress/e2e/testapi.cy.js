describe('GraphQL API Testing', () => {
  let todoId; // Define todoId variable to store the ID of the created todo

  it('Create todos', () => {
    cy.fixture('todo.graphql').then((createTodoQuery) => {
      cy.fixture('todo.json').then((createTodoVariables) => {
        cy.request({
          method: 'POST',
          url: 'https://5xp2dsgwnnbqxpgfopycnp3jkq.appsync-api.us-east-1.amazonaws.com/graphql',
          headers: {
            'X-Api-Key': 'da2-gzb6jcwcybe5rjcufjg5deq3r4'
          },
          body: {
            query: createTodoQuery,
            variables: createTodoVariables
          }
        }).then(response => {
          cy.log(response.body); 
          expect(response.status).to.eq(200);
          todoId = response.body.data.createTodo.id; // Extracting the ID of the created todo
          console.log("Created todo ID:", todoId); // Log the created todo ID
        });
      });
    });
  });

  it('should return list of todos', () => {
    cy.fixture('listtodo.graphql').then((listTodoQuery) => {
      cy.request({
        method: 'POST',
        url: 'https://mwdpovh6ejdqdhucxmx7p43vrq.appsync-api.us-east-1.amazonaws.com/graphql',
        headers: {
          'X-Api-Key': 'da2-g5px4lnq3bdzxjue4dufijqmxu'
        },
        body: {
          query: listTodoQuery,
          variables: {} // No variables needed for listing todos
        }
      }).then(response => {
        cy.log(JSON.stringify(response.body, null, 2));
        cy.log(response.body); 
        expect(response.status).to.eq(200);
        console.log(response.body); 
      });
    });
  });

  it('Update todos', () => {
    cy.fixture('updatetodo.graphql').then((UpdateTodoQuery) => {
      cy.request({
        method: 'POST',
        url: 'https://5xp2dsgwnnbqxpgfopycnp3jkq.appsync-api.us-east-1.amazonaws.com/graphql',
        headers: {
          'X-Api-Key': 'da2-gzb6jcwcybe5rjcufjg5deq3r4'
        },
        body: {
          query: UpdateTodoQuery,
          variables: {
            id: todoId // Use the extracted todo ID for update and delete operations
          }
        }
      }).then(response => {
        cy.log(response.body); 
        cy.writeFile('response.json', response.body);
        expect(response.status).to.eq(200);
        console.log(response); 
      });
    });
  });

  it('Delete todos', () => {
    cy.fixture('deletetodo.graphql').then((DeleteTodoQuery) => {
      cy.request({
        method: 'POST',
        url: 'https://5xp2dsgwnnbqxpgfopycnp3jkq.appsync-api.us-east-1.amazonaws.com/graphql',
        headers: {
          'X-Api-Key': 'da2-gzb6jcwcybe5rjcufjg5deq3r4'
        },
        body: {
          query: DeleteTodoQuery,
          variables: {
            id: todoId // Use the extracted todo ID for update and delete operations
          }
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