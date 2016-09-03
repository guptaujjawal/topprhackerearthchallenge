var control=require('./controller/control');

module.exports=function(app){
	app.route('/')
		.get(control.view);
    app.route('/list')
	    .get(control.list);
   app.route('/count')
	 	.get(control.count);
   app.route('/search_name')
	 	.post(control.searchname);
   app.route('/search_king')
	 	.post(control.searchking);
   app.route('/battle_type')
	 	.post(control.battletype);
   app.route('/location')
	 	.post(control.location);
   app.route('/stats')
	 	.get(control.stats);
}
