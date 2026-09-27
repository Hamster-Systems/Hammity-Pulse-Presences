export default async function presence(Hammity) {
  const running = await Hammity.process?.find?.(["example.exe"]);

  if (!running) {
    return null;
  }

  return {
    details: "Using Example",
    state: "Example activity",
    timestamps: {
      start: running.startedAt ?? Date.now()
    }
  };
}
