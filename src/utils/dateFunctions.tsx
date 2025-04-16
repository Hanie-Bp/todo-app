export const getTodayDate = () => {
    const today = new Date();
  
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
  
    const inputFormat = `${yyyy}-${mm}-${dd}`; // For <input type="date" />
    const readableFormat = today.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }); // For display: "Apr 10, 2025"
  
    return { inputFormat, readableFormat };
  };
