
export const UsePageAccess = (key) => {
  let access = null;
  try {
    let user_page_access = JSON.parse(localStorage.getItem("user_page_access"));
    let pageAccess = user_page_access.find((x) => x.name === key);
    if (pageAccess) {
      access = true;
    } else {
      access = false;
    }
  } catch (e) {
    access = false;
  }
  return access;
};

export const usePageComponentAccess = (key) => {
  let access = null;
  try {
    let user_component_access = JSON.parse(
      localStorage.getItem("user_component_access")
    );
    let pageComponentAccess = user_component_access.find((x) => x.name === key);
    if (pageComponentAccess) {
      access = true;
    } else {
      access = false;
    }
  } catch (e) {
    access = false;
  }

  return access;
};

