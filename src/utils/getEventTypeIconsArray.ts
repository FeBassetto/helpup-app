import { EventType } from "@dtos/event/eventDTO";
import { Brain, Ear, Eye, Wheelchair } from "phosphor-react-native";

export type EventTypeInfo = {
  icon: React.ElementType;
  title: string;
  eventType: EventType;
};

export function getEventTypeIconsArray(): EventTypeInfo[] {
  return [
    {
      eventType: "physical",
      icon: Wheelchair,
      title: "Físico",
    },
    {
      eventType: "visual",
      icon: Eye,
      title: "Visual",
    },
    {
      eventType: "auditory",
      icon: Ear,
      title: "Auditivo",
    },
    {
      eventType: "mental",
      icon: Brain,
      title: "Mental",
    },
  ];
}
