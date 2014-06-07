(function($){
    $(document).ready(function(){
        var dates = _.map([
            Date.today().first().friday(),
            Date.today().third().friday(),
            Date.today().next().month().first().friday(),
            Date.today().next().month().third().friday(),
            Date.today().next().month().next().month().first().friday(),
            Date.today().next().month().next().month().third().friday()
            ], function(date){
                if(date > Date.today()){
                    return date;
                }
            }),
            skip_dates = [
                '2014-04-18',
                '2014-07-04'
            ],
            $list = $('#schedule .list-group').empty(),
            schedule_item = tmpl('schedule_item');

        _.each(dates, function(date){
            if(date === undefined || $list.children().length === 4) {
                return;
            } else if (skip_dates.indexOf(date.toString('yyyy-MM-dd')) != -1) {
                return;
            }

            var context = {
                classes: ['list-group-item'],
                date: date,
                first: false
            };

            if($list.children().length === 0){
                context.first = true;
                context.classes.push('text-success');
            } else if ($list.children().length > 2) {
                context.classes.push('text-muted');
            }

            $list.append(schedule_item(context));
        });
    });
})(jQuery);
