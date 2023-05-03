
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewUser {
    email: string;
    name: string;
}

export class UpdateUser {
    id?: Nullable<string>;
    email?: Nullable<string>;
    name?: Nullable<string>;
}

export class User {
    id: string;
    email: string;
    name: string;
}

export abstract class IQuery {
    abstract getAllUsers(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract getUserById(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(input?: Nullable<NewUser>): User | Promise<User>;

    abstract updateUser(input?: Nullable<UpdateUser>): User | Promise<User>;

    abstract deleteUser(id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
