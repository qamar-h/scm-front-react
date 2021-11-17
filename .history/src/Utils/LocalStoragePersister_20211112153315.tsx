export class LocalStoragePersister
{
    static persist(key: string, value: any): void
    {

        if(typeof value == "object") {
            value = JSON.stringify(value);
        }

        localStorage.setItem(key, value);
    }

    static remove(key: string)
}