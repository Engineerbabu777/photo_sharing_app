import { supabase } from "@/lib/supabase";

export async function getEvents() {
  const { data } = await supabase.from("events").select("*").throwOnError();
  return data;
}

export async function getEventsForUser(userId: string) {
  const { data } = await supabase
    .from("event_memberships")
    .select("*, events(*, event_memberships(count))")
    .eq("user_id", userId)
    .throwOnError();
  return data.map((event_membership) => event_membership.events);
}

export async function getEvent(id: string) {
  const { data } = await supabase
    .from("events")
    .select("*, assets(*)")
    .eq("id", id)
    .throwOnError()
    .single();
  return data;
}
