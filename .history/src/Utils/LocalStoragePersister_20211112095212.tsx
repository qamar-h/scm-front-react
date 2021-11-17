export class LocalStoragePersister
{
    persist(key: string, value: any){

        if(typeof value == "object") {
            value = JSON.stringify(value);
        }

        localStorage.setItem(key, value);
    }
}