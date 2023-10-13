import authRoutes from './auth/auth.routes.js';
import usersRoutes from './users/users.routes.js';
import standardsRoutes from './standards/standards.routes.js';
import experimentersRoutes from './experimenters/experimenters.routes.js';
import experimentsRoutes from './experiments/experiments.routes.js';
import experimenterRolesRoutes from './experimenter_roles/experimenter_roles.routes.js';
import usersProfilesRoutes from './user_profiles/user_profiles.routes.js';
import artifactsRoutes from './artifacts/artifacts.routes.js';
import tasksRoutes from './tasks/tasks.routes.js';
import badgesRoutes from './badges/badges.routes.js';
import evaluationsRoutes from './evaluations/evaluations.routes.js';
import healthcheckRoutes from './healthcheck/healthcheck.routes.js';
import badgesEvaluationsRoutes from './badges_evaluations/badges_evaluations.routes.js';
import RepositoryRoutes from './repository_types/repository_type.routes.js';
import PackageTypeRoutes from './package_type/package_type.routes.js';
import LabPackRoutes from './labpack/labpack.routes.js';
import groupsRoutes from './groups/groups.routes.js';
import participantsRoutes from './participants/participants.routes.js';
import SelectedBadgeRoutes from './selected_standard/selected_standard.routes.js';
export default [
  ...authRoutes,
  ...usersRoutes,
  ...standardsRoutes,
  ...experimentersRoutes,
  ...experimentsRoutes,
  ...experimenterRolesRoutes,
  ...usersProfilesRoutes,
  ...artifactsRoutes,
  ...tasksRoutes,
  ...badgesRoutes,
  ...evaluationsRoutes,
  ...healthcheckRoutes,
  ...badgesEvaluationsRoutes,
  ...RepositoryRoutes,
  ...PackageTypeRoutes,
  ...LabPackRoutes,
  ...groupsRoutes,
  ...participantsRoutes,
  ...SelectedBadgeRoutes
];
