module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
          @import "@/assets/styles/_vendor/_variables.scss";
        `
			}
		}
	}
};