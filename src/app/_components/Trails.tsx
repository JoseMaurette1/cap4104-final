interface Trail {
  name: string;
  difficulty: string;
  description: string;
}

const miamiTrails: Trail[] = [
  {
    name: "Larry and Penny Thompson Park Loop",
    difficulty: "Easy",
    description:
      "Try this 2.9-mile loop trail near Miami, Florida. Generally considered an easy route, it takes an average of 51 min to complete. This trail is great for birding, running, and walking, and it's unlikely you'll encounter many other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail.",
  },
  {
    name: "Bobcat Boardwalk Trail",
    difficulty: "Easy",
    description:
      "Discover this 0.4-mile loop trail near Miami, Florida. Generally considered an easy route, it takes an average of 7 min to complete. This is a very popular area for walking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail.",
  },
  {
    name: "Virginia Key Trail",
    difficulty: "Easy",
    description:
      "This route is mostly used for mountain biking in which the trails are volunteer maintained. There are plenty of other trail connections in the park for those wishing to extend their route. Visitors are able to walk or jog on the trails as well, however, there is a lot of bike traffic and it may not make for the most enjoyable hiking experience.",
  },
  {
    name: "Tropical Park Loop",
    difficulty: "Easy",
    description:
      "Try this 3.7-mile loop trail near Miami, Florida. Generally considered an easy route, it takes an average of 1 h 4 min to complete. This trail is great for running and walking, and it's unlikely you'll encounter many other people while exploring. The best times to visit this trail are January through November. You'll need to leave pups at home — dogs aren't allowed on this trail.",
  },
  {
    name: "Hammocks Lakes Loop",
    difficulty: "Easy",
    description:
      "Head out on this 7.3-mile loop trail near Homestead, Florida. Generally considered an easy route, it takes an average of 2 h 5 min to complete. This trail is great for birding, road biking, and running, and it's unlikely you'll encounter many other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
  },
];

import React from "react";

const Trails = () => {
  return (
    <div className="w-full max-w-lg p-4">
      <ul>
        {miamiTrails.map(({ name, difficulty, description }, index) => (
          <li key={index}>
            <h1>{name}</h1>
            <h2>{difficulty}</h2>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trails;
