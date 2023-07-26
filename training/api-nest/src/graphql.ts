
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateMyUserInput {
    exampleField?: Nullable<number>;
}

export interface UpdateMyUserInput {
    id: number;
}

export interface MyUser {
    id: string;
    username: string;
    password: string;
    created_at: Date;
    updated_at: Date;
}

export interface IQuery {
    myUsers(): Nullable<MyUser>[] | Promise<Nullable<MyUser>[]>;
    myUser(id: number): Nullable<MyUser> | Promise<Nullable<MyUser>>;
    todos(): Todo[] | Promise<Todo[]>;
}

export interface IMutation {
    createMyUser(createMyUserInput: CreateMyUserInput): MyUser | Promise<MyUser>;
    updateMyUser(updateMyUserInput: UpdateMyUserInput): MyUser | Promise<MyUser>;
    removeMyUser(id: number): Nullable<MyUser> | Promise<Nullable<MyUser>>;
}

export interface Todo {
    id: string;
    title: string;
    description?: Nullable<string>;
}

type Nullable<T> = T | null;
