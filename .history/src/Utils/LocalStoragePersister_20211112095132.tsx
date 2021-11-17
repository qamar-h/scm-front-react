export class LocalStoragePersister
{
    persist(key: string, value: any){
        localStorage.setItem(key, value);
    }
}