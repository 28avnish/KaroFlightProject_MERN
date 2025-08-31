
export const requireSuperAdmin = (req, res, next) => {
  if (req.user.roleType !== "superadmin") return res.status(403).json({ message: "Forbidden" });
  next();
};

export const requireModule = (moduleName) => (req, res, next) => {
  if (req.user.roleType === "superadmin") return next(); // full access
  if (req.user.modules?.includes(moduleName)) return next();
  return res.status(403).json({ message: `Requires ${moduleName} permission` });
};