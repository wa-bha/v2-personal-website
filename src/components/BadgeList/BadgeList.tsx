import React from "react";
import { Badge, BadgeVariants } from "../ui/badge";

interface BadgeListProps extends BadgeVariants {
  badges: string[];
}

const BadgeList: React.FC<BadgeListProps> = ({ badges, variant }) => {
  return (
    <div className="flex flex-wrap gap-x-1 gap-y-1 pt-1.5">
      {badges.map((badge, index) => (
        <Badge key={index} variant={variant}>
          {badge}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeList;
