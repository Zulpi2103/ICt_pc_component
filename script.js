function calculateBuild() {
  const selectedCheckboxes = document.querySelectorAll('input[name="game"]:checked');

  if (selectedCheckboxes.length === 0) {
    document.getElementById("result").innerHTML = `
      <p>Please select at least one game.</p>
    `;
    return;
  }

  const selectedGameNames = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);

  const selectedGames = games.filter(game => selectedGameNames.includes(game.name));

  let requiredCpuScore = 0;
  let needX3D = false;
  let requiredGpuScore = 0;
  let requiredVram = 0;
  let needRayTracing = false;
  let requiredRam = 0;
  let totalStorage = 0;

  for (const game of selectedGames) {
    if (game.minCpuScore > requiredCpuScore) {
      requiredCpuScore = game.minCpuScore;
    }

    if (game.requiresX3D) {
      needX3D = true;
    }

    if (game.minGpuScore > requiredGpuScore) {
      requiredGpuScore = game.minGpuScore;
    }

    if (game.minVram > requiredVram) {
      requiredVram = game.minVram;
    }
    
    if (game.requiresRayTracing) {
      needRayTracing = true;
    }

    if (game.minRam > requiredRam) {
      requiredRam = game.minRam;
    }

    totalStorage += game.storage;


  }

  const recommendedCpu = cpus
    .slice()
    .sort((a, b) => a.score - b.score)
    .find(cpu => cpu.score >= requiredCpuScore && (!needX3D || cpu.hasx3d));

  const recommendedGpu = gpus
    .slice()
    .sort((a, b) => a.score - b.score)
    .find(gpu => gpu.score >= requiredGpuScore && gpu.vram >= requiredVram && (!needRayTracing || gpu.hasRayTracing));

  const recommendedRam = ramOptions
    .slice()
    .sort((a, b) => a - b)
    .find(ram => ram >= requiredRam);

  if (!recommendedCpu || !recommendedGpu || !recommendedRam) {
    document.getElementById("result").innerHTML = `
      <h2>No suitable build found</h2>
      <p>At least one selected game requires stronger hardware than your current component list includes.</p>
      <p>Required CPU score: ${requiredCpuScore}</p>
      <p>Required GPU score: ${requiredGpuScore}</p>
      <p>Required VRAM: ${requiredVram} GB</p>
      <p>Required RAM: ${requiredRam} GB</p>
    `;
    return;
  }
  
  if (requiredGpuScore < 100 || requiredCpuScore < 100 || requiredRam < 4 || recommendedCpu < 100 || recommendedGpu < 100 || recommendedRam < 4 ) {
    document.getElementById("result").innerHTML = `
      <h2>bruh.</h2>
    `;
    return;
  }

  document.getElementById("result").innerHTML = `
    <h2>Recommended build</h2>

    <p><strong>CPU:</strong> ${recommendedCpu.name}</p>
    <p><strong>GPU:</strong> ${recommendedGpu.name} (${recommendedGpu.brand}, ${recommendedGpu.vram} GB VRAM)</p>
    <p><strong>RAM:</strong> ${recommendedRam} GB</p>
    <p><strong>Total storage needed:</strong> ${totalStorage} GB NVMe SSD</p>
  `;
}