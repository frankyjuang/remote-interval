(async () => {
  const url = new URL(location.href);
  const minTimezone = url.searchParams.get("mt");
  const maxTimezone = url.searchParams.get("mxt");

  // Insert filter button.
  const filterContainer = document.querySelector("#job-search-form ul.grid");
  if (filterContainer.querySelector("#popover-timezone") === null) {
    const placeholder = document.createElement("div");
    const rawFilter = await fetch(browser.runtime.getURL("filter.html"));
    filterContainer.appendChild(placeholder);
    placeholder.outerHTML = await rawFilter.text();
  }

  // Update filter state.
  const indicator = filterContainer.querySelector(
    "button[data-tab=Timezone] .js-filter-indicator"
  );
  let count = 0;
  if (minTimezone !== null) {
    filterContainer.querySelector("#mt").value = minTimezone;
    count += 1;
  }
  if (maxTimezone !== null) {
    filterContainer.querySelector("#mxt").value = maxTimezone;
    count += 1;
  }
  if (count > 0) {
    indicator.innerHTML = count;
    indicator.classList.remove("d-none");
  }

  // Query timezone information and filter.
  const jobs = document.querySelectorAll(".listResults .-job");
  jobs.forEach(async (job) => {
    const jobId = job.getAttribute("data-jobid");
    const res = await fetch(`https://stackoverflow.com/jobs/${jobId}`);
    const rawJob = await res.text();
    const match = rawJob.match(
      /\(GMT([+-]\d\d):\d\d\)(?:.+?\+\/\-\s(\d+)\shours)?/
    );
    if (match !== null) {
      const tz = parseInt(match[1]);
      const offset = match[2] === undefined ? 0 : parseInt(match[2]);
      if (
        (minTimezone !== null && tz + offset < minTimezone) ||
        (maxTimezone !== null && tz - offset > maxTimezone)
      ) {
        job.style.opacity = 0.2;
      }
    } else if (rawJob.includes("Preferred Timezone")) {
      console.warn(`Failed to parse preferred timezone of job ${jobId}`);
    }
  });
})();
