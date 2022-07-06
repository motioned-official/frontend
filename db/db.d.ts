/**
 * @name MotionedService
 * @type {title: string; type: string; brief: string; url: string}
 * @ref 'db/db.d.ts'
 */
declare interface MotionedService {
  title: string;
  type: string;
  brief: string;
  url: string;
}
/**
 * @name MotionedWork
 * @type {title: string; type: string; brief: string; url: string}
 * @ref 'db/db.d.ts'
 */
declare interface MotionedWork {
  title: string;
  type: string;
  brief: string;
  url: string;
}
/**
 * @name MotionedGoal
 * @type {index: number;goal: string;description: string}
 * @ref 'db/db.d.ts'
 */
declare interface MotionedGoal {
  index: number;
  goal: string;
  description: string;
}
/**
 * @name MotionedTeam
 * @type {name: string; position: string; bio: string; links: {linkedin, github, personal}, image: string}
 * @ref 'db/db.d.ts'
 */
declare interface MotionedTeam {
  name: string;
  position: string;
  bio: string;
  image?: string | StaticImageData;
  links?: {
    github?: string;
    linkedin?: string;
    personal?: string;
  };
}
