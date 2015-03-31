/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 $( document ).ready( function () {
 $( '.slideMenuIcon' ).tooltip();
 } );
 /***/
/*
 (function ( $ ) {
 
 })( jQuery );
 /**/

$( function () {

    function createUID( prefix ) {

        do {
            prefix += ~~(Math.random() * 1000000);
        }
        while ( document.getElementById( prefix ) );
        return prefix;
    }





    $( '[data-toggle="tooltip"]' ).hover(
            function () {
                var tooltipInner, tooltipArrow, tooltip, objOffset, top, left, title, uid;


                objOffset = $( this ).offset();
                top = objOffset.top;
                left = objOffset.left + ($( this ).width() / 2);

                title = $( this ).prop( 'title' );
                uid = $( this ).attr( 'data-tooltip-uid' );

                var template = '<div class="tooltip-wrap"><div class="tooltip fade top in" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div></div>';

                if ( !uid ) {
                    uid = createUID( 'tto' );
                    $( this ).attr( 'data-tooltip-uid', uid );
                }



                var toolTipObj = $( '#tt-' + uid );
                if ( $( toolTipObj ).length ) {
                    //$( toolTipObj ).show();
                }
                else
                {
                    tooltip = $( '<div></div>' );
                    var tooltipWrap = $( '<div></div>' );
                    var tooltipInnerWrap = $( '<div></div>' );

                    $( tooltipWrap )
                            .css( 'position', 'absolute' )
                            .css( 'top', top )
                            .css( 'left', left )

                            .attr( 'id', 'tt-' + uid );

                    $( tooltipInnerWrap ).css( 'position', 'relative' );



                    $( tooltip )
                            .addClass( 'tooltip fade top in' )
                            .css( 'position', 'absolute' )
                            .css( 'bottom', 3 )
                            .css( 'left', 0 )
                            .prop( 'role', 'tooltip' )
                            .append( tooltipArrow )
                            .append( tooltipInner );


                    tooltipArrow = $( '<div></div>' ).addClass( 'tooltip-arrow' ).css( 'left', '50%' );
                    tooltipInner = $( '<div></div>' ).addClass( 'tooltip-inner' ).html( title );

                    $( tooltip ).append( tooltipArrow );
                    $( tooltip ).append( tooltipInner );
                    $( tooltipInnerWrap ).append( tooltip );
                    $( tooltipWrap ).append( tooltipInnerWrap );

                    $( 'body' ).append( tooltipWrap );

                    tooltip = $( '#tt-' + uid ).find( '.tooltip' );
                    var width = $( tooltip ).width();
                    $( tooltip ).css( 'margin-left', -width / 2 );
                    $( tooltip ).fadeIn( 900 );

                }

            },
            function () {
                var uid = $( this ).attr( 'data-tooltip-uid' );
                $( '#tt-' + uid ).remove();
            }
    );
} );