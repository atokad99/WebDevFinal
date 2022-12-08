import { api } from "./session";



export function getActivities() {
  return api<ListEnvelope<Activity>>('activities');
}

export function addActivity(activity: Activity) {
    return api<Activity>(`activities`, activity);
}

export function deleteActivity(_id: string) {
    return api<{deletedCount:boolean}>(`activities/${_id}`,{}, 'DELETE');
}

export interface ListEnvelope<T> {
    activities: T[]
    total: number
    skip: number
    limit: number
  }
  
  export interface Activity {
    _id: string
    user: string
    tag: string
    date: string
    title: string
    time: number
    distance: number
    sets: number
    reps: number
    weight: number
    image: string
  }