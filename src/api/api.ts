import { Type } from "@nestjs/common";
import { HydratedDocument, Model } from "mongoose";
import * as _ from 'lodash';
import { Status } from "src/shared/enum/status.enum";

export class Service<T> {

    constructor(
        protected model: Model<HydratedDocument<T>>
    ) {}

    /**
     * 
     * @param dtoObj 
     * @returns 
     */
    async insert(dtoObj: any) : Promise<T>{
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.model.create(dtoObj);
                resolve(response);
            } catch (error: any) {
                reject(error);
            }
        });
    }

    /**
     * 
     * @returns 
     */
    async getAll() : Promise<T[]>{
        return new Promise(async (resolve, reject) => {
            try {
                let sortByOptions: any = {name: null};
                console.debug('Service.getAll.this.model', this.model.modelName)
                switch (this.model.modelName) {
                    case 'User':
                        sortByOptions = {
                            name: 1
                        }
                        break;
                }
                console.debug('Service.getAll.sortByOptions', sortByOptions)
                const response = await this.model.find().sort(sortByOptions);
                resolve(response);
            } catch (error: any) {
                reject(error);
            }
        });
    }

    /**
     * 
     * @param email 
     * @returns 
     */
    async getOneByEmail(email: string) : Promise<T>{
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.model.findOne({email});
                resolve(response);
            } catch (error: any) {
                reject(error);
            }
        });
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async getOneById(id: string) : Promise<T>{
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.model.findOne({id});
                resolve(response);
            } catch (error: any) {
                reject(error);
            }
        });
    }

    /**
     * 
     * @param options 
     * @returns 
     */
    async getOneByOptions(options: any) : Promise<T>{
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.model.findOne(options);
                resolve(response);
            } catch (error: any) {
                reject(error);
            }
        });
    }

    /**
     * 
     * @param phrase 
     * @returns 
     */
    async search(phrase: string) : Promise<T[]>{
        return new Promise(async (resolve, reject) => {
            try {
                phrase = _.upperFirst(phrase);
                console.debug('', `/^${phrase}/`);
                const response = await this.model.find({ name: { '$regex': `${phrase}` } });
                resolve(response);
            } catch (error: any) {
                reject(error);
            }
        });
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async removeById(id: string) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.model.updateOne({id}, {status: Status.DELETED});
                resolve(response);
            } catch (error: any) {
                reject(error);
            }
        });
    }

    /**
     * 
     * @param email 
     * @returns 
     */
    async removeByEmail(email: string) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.model.updateOne({email}, {status: Status.DELETED});
                resolve(response);
            } catch (error: any) {
                reject(error);
            }
        });
    }

    /**
     * 
     * @param email 
     * @returns 
     */
    async updateByEmail(email: string, objDto) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.model.updateOne({email}, objDto);
                resolve(response);
            } catch (error: any) {
                reject(error);
            }
        });
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async updateById(id: string, objDto: any) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.model.updateOne({id}, objDto);
                resolve(response);
            } catch (error: any) {
                reject(error);
            }
        });
    }
}