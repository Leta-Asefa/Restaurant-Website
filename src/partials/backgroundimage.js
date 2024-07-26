const BackgroundImage = () => {
  return (
    <div class="relative">
      <video src="0726.mp4" autoPlay loop muted className="absolute top-0 left-0 w-full h-screen object-cover z-0"></video>
      <div class="absolute top-0 left-0 w-full h-screen bg-black opacity-70 z-10"></div>
    </div>

  );
}

export default BackgroundImage;