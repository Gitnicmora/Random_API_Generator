$(document).ready(function(){

    $('#generate').click(function(){

    
    var number = $('input').val()

        $.ajax({
            url: `https://randomuser.me/api/?results=${number}`,
            dataType: 'json',
            success: function(res) {
                var data = res.results
                console.log(data)

                var html_str = ''
                var table_str = ''

                for(var i = 0; i < data.length; i++){
                    console.log(data[i].name.first)
                    console.log(data[i].name.last)

                    table_str += "<tbody></tbody>"
                    table_str += "<tr></tr>"
                    table_str += "<td>" + data[i].name.first + '' + data[i].name.last + "</td>"
                    table_str += "<td>" + data[i].dob.age + "</td>"
                    table_str += "<td>" + data[i].email + "</td>"
                    table_str += "<td>" + data[i].location.street.number + '' + data[i].location.street.name +',' + data[i].location.city + ',' + data[i].location.postcode + "</td>"


                    html_str += "<div class='col-12 col-sm-6 col-md-4'>"
                    html_str += "<div class='card my-1 p-2'>"
                    html_str += "<img class='card-img-top' src="+ data[i].picture.large +" alt='user'>"
                    html_str += "<div class='card-body'>"
                    html_str += "<h5 class='card-title'>" + data[i].name.first + '' + data[i].name.last + "</h5>"

                    html_str += "<button class='btn btn-info'>Email</button>"
                    html_str +="</div>"
                    html_str +="</div>"
                    html_str +="</div>"
                }
                $('.table').append(table_str)
                $('.row').append(html_str)
            }
        })
    })

})