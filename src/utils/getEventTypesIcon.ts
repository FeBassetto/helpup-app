import { EventType } from "@dtos/event/eventDTO";
import { Brain, Ear, Eye, Wheelchair } from "phosphor-react-native";

type EventTypeInfo = {
  icon: React.ElementType;
  title: string;
};

export function getEventTypesIcon(type: EventType): EventTypeInfo {
  const eventTypes: Record<EventType, EventTypeInfo> = {
    physical: {
      icon: Wheelchair,
      title: "Físico",
    },
    visual: {
      icon: Eye,
      title: "Visual",
    },
    auditory: {
      icon: Ear,
      title: "Auditivo",
    },
    mental: {
      icon: Brain,
      title: "Mental",
    },
  };

  return eventTypes[type];
}
