// graph qlだとcontorollerの役割がresolver

import { Query, Resolver } from '@nestjs/graphql';
import { query } from 'express';
import { Todo } from 'src/graphql';

const mockTodoService = {
  getTodos() {
    return Promise.resolve([
      {
        id: '1',
        title: '読書',
        description: '一時間本を読む',
      },
      {
        id: '2',
        title: 'マラソン',
        description: '一時間マラソンする',
      },
    ]);
  },
};

@Resolver('Todos')
export class TodosResolver {
  @Query('todos')
  todosWhatEveryAnything(): Promise<Todo[]> {
    return mockTodoService.getTodos();
  }
}
