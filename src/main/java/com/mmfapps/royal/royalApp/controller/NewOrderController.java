package com.mmfapps.royal.royalApp.controller;

import java.io.IOException;
import java.security.GeneralSecurityException;

import javax.mail.MessagingException;
import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.mmfapps.royal.royalApp.model.NewOrder;
import com.mmfapps.royal.royalApp.repository.NewOrderRepository;
import com.mmfapps.royal.royalApp.service.SmtpMailSender;

@RestController
public class NewOrderController {
	
	@Autowired
	private NewOrderRepository repository;
	
	@Autowired
	private SmtpMailSender smtpMailSender;
/*************************************************************************************/
/**TODO The method has to be change the name will be something like "setNewOrder" in this method set the JSON a use it
 * to persist into the data base and after that call the method that send the email passing just the information needed.
 * Also try to follow some other good practices base in the StockControl Project**/
	@PostMapping("//sendOrderMail")
	public void sendMail (@Valid @RequestBody String orderInfo) throws MessagingException, GeneralSecurityException, IOException {
	//public void sendMail (@RequestBody String orderInfo) throws MessagingException, GeneralSecurityException, IOException {
		Gson gson = new Gson();
//		******************ArrayList<Form> yourArray = gson.fromJson(prueba_aux, new TypeToken<List<Form>>(){}.getType());
		ObjectId order_id = ObjectId.get();
		
		NewOrder newOrder = new NewOrder();
		NewOrder.set_id(order_id);
		newOrder = gson.fromJson(orderInfo,NewOrder.class);
		
		repository.save(newOrder);

		String SendString = "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\n" +
				"<html xmlns=\"http://www.w3.org/1999/xhtml\" \n" +
				" xmlns:v=\"urn:schemas-microsoft-com:vml\"\n" +
				" xmlns:o=\"urn:schemas-microsoft-com:office:office\">\n" +
				"<head>\n" +
				"  \n" +
				"  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n" +
				"  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> \n" +
				"  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> \n" +
				"  <meta name=\"format-detection\" content=\"date=no\"> \n" +
				"  <meta name=\"format-detection\" content=\"telephone=no\"> \n" +
				"  <title>Royal</title>\n" +
				"  <link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\">\n" +
				"  <link rel=\"stylesheet\" type=\"text/css\" href=\"responsive.css\">\n" +
				"</head>\n" +
				"<body style=\"margin:0; padding:0; -ms-text-size-adjust: 100%;\n" +
                "  -webkit-text-size-adjust: 100%;\" bgcolor=\"#F0F0F0\" leftmargin=\"0\" topmargin=\"0\" marginwidth=\"0\" marginheight=\"0\">\n" +
				"\n" +
				"\n" +
				"<table style=\"border-spacing: 0;\" border=\"0\" width=\"100%\" height=\"100%\" cellpadding=\"0\" cellspacing=\"0\" bgcolor=\"#F0F0F0\">\n" +
				"  <tr>\n" +
				"    <td align=\"center\" valign=\"top\" bgcolor=\"#F0F0F0\" style=\"background-color: #F0F0F0; border-collapse: collapse;\">\n" +
				"\n" +
				"      <br>\n" +
				"\n" +
				"      \n" +
				"      <table style=\"width: 600px;\n" +
                "  max-width: 600px;\" border=\"0\" width=\"600\" cellpadding=\"0\" cellspacing=\"0\" class=\"container\">\n" +
				"        <tr>\n" +
				"          <td class=\"container-padding header\" align=\"left\" style=\"font-size: 24px;\n" +
                "  font-weight: bold;\n" +
                "  padding-bottom: 12px;\n" +
                "  color: #38bd38; font-family: Helvetica, Arial, sans-serif;\">\n" +
				"            Gracias, tu pedido ha sido colocado EXITOSAMENTE!\n" +
				"          </td>\n" +
				"        </tr>\n" +
				"        <tr>\n" +
				"          <td style=\"padding-top: 12px;\n" +
                "\n" +
                "padding-bottom: 12px; padding-left: 20px; padding-left: 20px;\n" +
                "\n" +
                "background-color: #ffffff;\" class=\"container-padding content\" align=\"left\">\n" +
				"            <br>\n" +
				"\n" +
				"<div style=\"font-family: Helvetica, Arial, sans-serif;\" class=\"title\">Pedido con Royal</div>\n" +
				"<br>\n" +
				"\n" +
				"<div class=\"body-text\">\n" +
					"Nombre : "+newOrder.getFirstName()+" <br>\n" +
					"Servicio : "+newOrder.getServiceType()+" <br>\n" +
					"Email : "+newOrder.getEmail()+" <br>\n" +
					"Día y hora : "+newOrder.getDateHours()+" <br>\n" +
					"Total : "+newOrder.getTotal()+" <br>\n" +
				"  <br><br>\n" +
				"\n" +
				"  <br><br>\n" +
				"</div>\n" +
				"\n" +
				"          </td>\n" +
				"        </tr>\n" +
				"        <tr>\n" +
				"          <td style=\"font-family: Helvetica, Arial, sans-serif; font-size: 12px;\n" +
                "  line-height: 16px;\n" +
                "  color: #aaaaaa; \"" +
                "class=\"container-padding footer-text\" align=\"left\">\n" +
				"            <br><br>\n" +
				"            &copy; 2019 Royal\n" +
				"            <br><br>\n" +
				"\n" +
				"            You are receiving this email because you opted in on our website. Update your <a href=\"royal.fotografos@gmail.com\">email preferences</a> or <a href=\"#\">unsubscribe</a>.\n" +
				"            <br><br>\n" +
				"\n" +
				"            <strong style=\"font-size: 15px; color: #DC3545;\">Royal Fotógrafos</strong><br>\n" +
				"            <span class=\"ios-footer\">\n" +
				"              Guadalajara, JAL<br>\n" +
				"            </span>\n" +
				"            <a href=\"http://www.RoyalFotografos.com\">www.RoyalFotografos.com</a><br>\n" +
				"\n" +
				"            <br><br>\n" +
				"\n" +
				"          </td>\n" +
				"        </tr>\n" +
				"      </table>\n" +
				"\n" +
				"\n" +
				"    </td>\n" +
				"  </tr>\n" +
				"</table>\n" +
				"\n" +
				"</body>\n" +
				"</html>";


		smtpMailSender.send(newOrder.getEmail(), "Prueba Pedido NUEVO", SendString);


//		smtpMailSender.send("royal.fotografos@gmail.com", "Prueba Pedido NUEVO", SendString);
		smtpMailSender.send("mario_66_99@hotmail.com", "Prueba Pedido NUEVO", SendString);

		//System.out.println(data.size());


		
	}

}

