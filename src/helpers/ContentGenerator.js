import axios from 'axios'
import store from '../store/index'



export default class ContentGenerator {
    constructor() {
        this.importCount = 0;
        this.status = 0;
        this.axios = axios;
    }

    async generate(limit = 10) {
        while (this.importCount < limit) {
            await this.axios.get("http://faker.hook.io/?property=name.findName&locale=en").then((response) => {
                this.importCount++

                let name = response.data.split(" ");

                let email = `${name[0]}.${name[1]}@mail.domain`.toLocaleLowerCase()

                let newUserData = {
                    name: name[0],
                    surname: name[1],
                    email: email,
                    query: ""
                };

                store.commit("addUserRecord", newUserData);
            })

            this.status = 1;
        }
        this.importCount = 0;
        this.status = 0;
    }
}